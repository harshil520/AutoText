import { Loader2Icon } from 'lucide-react'
import React from 'react'

export default function loading() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Loader2Icon className='animate-spin' />
        </div>
    )
}
