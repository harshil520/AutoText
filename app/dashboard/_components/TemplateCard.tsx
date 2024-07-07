import React from 'react'
import { TEMPLATE } from './TemplateList'
import Image from 'next/image'
import Link from 'next/link'

export default function TemplateCard(item: TEMPLATE) {
    return (
        <Link href={'/dashboard/content/' + item.slug} className='p-5 justify-stretch hover:bg-gray-600 hover:text-white shadow-md rounded-md border bg-white flex flex-col gap-3 hover:scale-105 transition-all'>
            <Image src={item.icon} alt='icon' width={50} height={50} />
            <h2 className='text-lg font-extrabold'>{item.name}</h2>
            <p className='line-clamp-3'>{item.desc}</p>
        </Link>
    )
}
