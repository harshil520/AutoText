import React from 'react'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

export default function SearchSection({ onSearchInput }: any) {
    return (
        <div className='p-0 bg-gradient-to-br from-gray-500 via-slate-700 to-blue-600 flex flex-col justify-center items-center text-white'>
            <div className='self-end px-5 py-2'>
                <UserButton />
            </div>
            <div className='filter invert bg-transparent'>
                <Image src={'/image-transparent.png'} alt='logo' className='py-3' height={150} width={300} />
            </div>
            {/* <h2 className='text-3xl font-bold'>Welcome to AutoText</h2> */}
            <p className='text-2xl font-medium'>What would you like to create today?</p>
            <div className='w-full flex justify-center'>
                <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
                    <Search className='text-primary' />
                    <input onChange={(e) => onSearchInput(e.target.value)} type="text" placeholder='Search' className='bg-transparent w-full outline-none text-black' />
                </div>
            </div>
        </div>
    )
}