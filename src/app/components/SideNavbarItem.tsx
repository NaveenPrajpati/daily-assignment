import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {RxDashboard} from 'react-icons/rx'


export default function SideNavbarItem({item,subitem}:{item:String,subitem:string[]}) {
  return (
    <div>
            <div className='flex items-center justify-between border-t border-neutral-900 px-[30px] h-[54px]'>
                <div className='flex items-center gap-1'>
            <RxDashboard/>
            <p className='text-[16px] font-[500]'>{item}</p>
                </div>
                <IoIosArrowDown/>
            </div>
            {subitem?.map((item: string ,index: React.Key | null | undefined)=>(

            <p className='px-[50px] mb-[10px]' key={index}>{item}</p>
            ))}
            

        </div>
  )
}
