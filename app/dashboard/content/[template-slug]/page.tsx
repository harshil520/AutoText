"use client";
import React, { useContext, useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateList';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
import { useUser } from '@clerk/nextjs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CreateNewContent(props: any) {

    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>("");
    const { user } = useUser();

    const generateAIContent = async (formData: any) => {
        try {

            setLoading(true);
            const SelectedPrompt = selectedTemplate?.aiPrompt;
            const finalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
            const result = await chatSession.sendMessage(finalAIPrompt);
            console.log(result.response.text());
            setAiOutput(result.response.text());
            setLoading(false);

        } catch (error) {
            setLoading(false);
            toast("Error. please try again.");
            console.log(error)
        }
    };

    const selectedTemplate: TEMPLATE | undefined = Templates?.find(item => item.slug == props.params['template-slug']);
    return (
        <div className='p-5'>
            <Link href={'/dashboard'}>
                <Button><ArrowLeft /> Back</Button>
            </Link>
            <ToastContainer />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection loading={loading} userFormInput={(v: any) => generateAIContent(v)} selectedTemplate={selectedTemplate} />
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}
