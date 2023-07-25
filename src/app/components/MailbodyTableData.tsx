import React from 'react'
import {LiaSaveSolid} from 'react-icons/lia'


export default function MailbodyTableData() {
  return (
                        <tr className='' >
                        <td className='border border-neutral-200 text-neutral-800 px-[20px] py-[10px] h-[44px] w-[293px] text-start text-[16px] font-[400]'>Lorem, ipsum.</td>
                        <td className='border border-neutral-200 text-neutral-800 px-[20px] py-[10px] h-[44px] w-[293px] text-start text-[16px] font-[400]'>Lorem, ipsum.</td>
                        <td className='border border-neutral-200 text-neutral-800 px-[20px] py-[10px] h-[44px] w-[293px] text-start text-[16px] font-[400]'>Lorem, ipsum.</td>
                        <td className=' border border-t-neutral-200 text-neutral-800 px-[20px] py-[10px] h-[46px]  text-start text-[16px] font-[400] flex gap-x-[10px]'>
                            <button className='flex gap-[5px] rounded-[3px]   bg-blue-700 text-white items-center px-[3px] py-[5px]'>
                                <LiaSaveSolid/>
                                <p className='text-[12px]'>Edit</p>
                            </button>
                            <button className='flex gap-[5px] rounded-[3px]  bg-amber-600 text-white items-center px-[3px] py-[5px]'>
                                <LiaSaveSolid/>
                                <p className='text-[12px]'>Delete</p>
                            </button>
                        </td>
                    </tr>
  )
}
