import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function TemplateList({ searchInput }: any) {

    const [templateList, setTemplateList] = useState(Templates);

    useEffect(() => {
        if (searchInput) {
            const result = Templates.filter((item) => {
                return item.name.toLowerCase().includes(searchInput.toLowerCase());
            });
            setTemplateList(result);
        } else {
            setTemplateList(Templates);
        }
    }, [searchInput]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
            {templateList.map((item: TEMPLATE, index: number) => {
                return <TemplateCard {...item} key={index} />
            })}
        </div>
    )
}

export default TemplateList;