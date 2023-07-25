import Image from 'next/image'
import React from 'react'
import {BiHomeAlt ,BiMenuAltRight} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {TfiMenuAlt} from 'react-icons/tfi'
export default function Navbar() {
  return (
    <div className='flex items-center justify-between  p-1 bg-neutral-900 h-[55px] px-[30px]'>
        <div className='flex gap-5'>
            <p className='flex items-center gap-1 text-[14px] font-[400] '><BiHomeAlt/>Home</p>
            <p className='flex items-center gap-1 text-[14px] font-[400]'><TfiMenuAlt/>Contents</p>
            <p className='flex items-center gap-1 text-[14px] font-[400]'><BiMenuAltRight/>Categories</p>
            <p className='flex items-center gap-1 text-[14px] font-[400]'><FiSettings/>Setting</p>
        </div>
        <div className='bg-white rounded-2xl pr-1 flex items-center text-black'>
            <Image src={'/images/profilepic.png'} width={30} height={30} alt='no'/>
            <p className='text-[14px] font-[400] '>İsmail İhsan Bülbül</p>
        </div>
    </div>
  )
}
