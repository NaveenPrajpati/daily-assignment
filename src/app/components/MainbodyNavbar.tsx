import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'
import {FiSearch} from 'react-icons/fi'



export default function MainbodyNavbar() {
  return (
    <div className='flex justify-between h-[77px] px-[30px] py-[15px] bg-white'>
      <div className='flex gap-[30px] items-center'>

      <p className='text-[22px] font-[600] '>Add new post</p>
      <div className='flex gap-1 items-center text-[16px] font-[400]'><AiOutlinePlus/>Add Content</div>
      <div className='flex gap-1 items-center text-[16px] font-[400]'><FiSettings/>Setting</div>
      </div>
      <div className='flex items-center justify-between p-[10px] border border-neutral-300  w-[350px] rounded-[5px]'>
        <p className='text-[16px] font-[400]'>Search content</p>
        <FiSearch className='text-[16px]'/>
      </div>
    </div>
  )
}
