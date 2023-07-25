import Image from 'next/image'
import React from 'react'

export default function MainBodyForm1() {
  return (
    <div className='m-[30px]  bg-white p-[30px] rounded-[10px]'>
         <p className='text-[22px] font-[600]'>Form title</p>
            <p className='text-[16px] font-[300]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, doloribus.</p>
            <div className='mt-[20px] flex gap-[10px]'>
                <button className='flex items-center gap-1 h-[35px] w-[101px] rounded-[5px] bg-amber-200 border text-[16px] border-[#C8102E] p-[5px]'>
                    <Image src={'/images/flag1.png'} width={25} height={25} alt='no'/>
                    English
                </button>
                <button className='flex items-center gap-1 h-[35px] w-[101px] rounded-[5px]  border text-[16px] border-[#C8102E] p-[5px]'>
                    <Image src={'/images/flag2.png'} width={25} height={25} alt='no'/>
                    Turkish
                </button>
            </div>

            <form action="">
                <label htmlFor="" className='mt-[20px] block' >Label title
                <input type="text" placeholder='Placeholder content' className='border border-neutral-300 rounded-[5px] w-full p-2' />
                </label>
                
                <div className='flex gap-[20px]'>
                <label htmlFor="" className='mt-[20px] block w-full' >Label title
                <select name="" id="" placeholder='hi' className='border border-neutral-300 rounded-[5px] w-full p-2 text-neutral-500'>
                    <option value="" className=''><p >Chose</p></option>
                </select>
                </label>
                <label htmlFor="" className='mt-[20px] block  w-full' >Label title
                <input type="text" placeholder='Placeholder content' className='border border-neutral-300 rounded-[5px] w-full p-2' />
                </label>
                <label htmlFor="" className='mt-[20px] block w-full' >Label title
                <input type="text" placeholder='Placeholder content' className='border border-neutral-300 rounded-[5px] w-full p-2' />
                </label>
                </div>
                <div className='flex gap-[20px]'>
                <label htmlFor="" className='mt-[20px] block w-full' >Label title
                <input type="text" placeholder='Placeholder content' className='border border-neutral-300 rounded-[5px] w-full p-2' />
                </label>
                <label htmlFor="" className='mt-[20px] block  w-full' >Label title
                <input type="text" placeholder='Placeholder content' className='border border-neutral-300 rounded-[5px] w-full p-2' />
                </label>
               
                </div>
                <label htmlFor="" className='mt-[20px] block  w-full' >Label title
                <textarea name="" id="" cols={30} rows={8} placeholder='content here' className='border border-neutral-300 rounded-[5px] w-full p-2'></textarea>
                </label>
            </form>
    </div>
  )
}
