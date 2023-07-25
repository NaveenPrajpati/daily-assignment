import React from 'react'
import {PiWarningCircleBold} from 'react-icons/pi'
import {LiaSaveSolid} from 'react-icons/lia'
import {HiChevronDoubleRight} from 'react-icons/hi'
import {HiChevronDoubleLeft} from 'react-icons/hi'
import MailbodyTableData from './MailbodyTableData'

export default function MainBodyListView() {
  return (
    <div className='mx-[30px]  bg-white p-[30px] rounded-[10px]'>
            <p className='text-[22px] font-[600]'>Form title</p>
            <p className='text-[16px] font-[300]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, doloribus.</p>
            <div className='my-[20px] rounded-[5px] p-[15px] gap-[10px] bg-red-50 text-red-900 border border-red-400 flex items-center'>
                <PiWarningCircleBold/>
                <p className='text-[16px] font-[400]'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='  '>
            <table className='w-full border border-neutral-200 '>
                <thead className=''>
                    <tr className='bg-neutral-300 rounded-[15px]'>
                        <th className='border  border-neutral-200 text-neutral-800 px-[20px] py-[10px] h-[47px] w-[293px] text-start text-[18px] font-[500]'>Table Title</th>
                        <th className='border border-neutral-200 text-neutral-800 px-[20px] py-[10px] h-[47px] w-[293px] text-start text-[18px] font-[500]'>Table Title</th>
                        <th className='border border-neutral-200 text-neutral-800 px-[20px] py-[10px] h-[47px] w-[293px] text-start text-[18px] font-[500]'>Table Title</th>
                        <th className='border border-neutral-200 text-neutral-800 px-[20px] py-[10px] h-[47px]  text-start text-[18px] font-[500]'>Table Title</th>
                      
                    </tr>
                </thead>
                <tbody>
                    <MailbodyTableData/>
                    <MailbodyTableData/>
                    <MailbodyTableData/>
                    <MailbodyTableData/>
                    <MailbodyTableData/>
                    <MailbodyTableData/>
                    <MailbodyTableData/>
                </tbody>
            </table>

            <div className='mt-[20px] h-[35px] text-center flex justify-center items-center gap-[5px]'>
                <HiChevronDoubleLeft className=' text-neutral-400'/>
                <div className='h-[35px] w-[35px] text-[14px] rounded-[5px] flex justify-center items-center border border-neutral-400'>
                    1
                </div>
                <div className='h-[35px] w-[35px] text-[14px] rounded-[5px] flex justify-center items-center bg-blue-600 text-white border border-neutral-400'>
                    2
                </div>
                <div className='h-[35px] w-[35px] text-[14px] rounded-[5px] flex justify-center items-center border border-neutral-400'>
                    3
                </div>
                <div className='h-[35px] w-[35px] text-[14px] rounded-[5px] flex justify-center items-center border border-neutral-400'>
                    4
                </div>
                <div className='h-[35px] w-[35px] text-[14px] rounded-[5px] flex justify-center items-center border border-neutral-400'>
                    5
                </div>
                <HiChevronDoubleRight/>
            </div>
            </div>
        </div>
  )
}
