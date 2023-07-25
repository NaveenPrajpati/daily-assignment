import Image from 'next/image'
import React from 'react'

export default function MainBodyForm2() {
  return (
    <div className='flex'>

   
    <div className='m-[30px]  bg-white p-[30px] rounded-[10px] w-full'>
         <p className='text-[22px] font-[600]'>Form title</p>
            <p className='text-[16px] font-[300]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, doloribus.</p>
           

            <form action="">
                <label htmlFor="" className='mt-[20px] block' >Label title
                <input type="text" placeholder='Placeholder content' className='border border-neutral-300 rounded-[5px] w-full p-2' />
                </label>
                
                <label htmlFor="" className='mt-[20px] block w-full' >Label title
                <select name="" id="" placeholder='hi' className='border border-neutral-300 rounded-[5px] w-full p-2 text-neutral-500'>
                    <option value="" className=''><p >Chose</p></option>
                </select>
                </label>
               
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
    <div className='my-[30px] mr-[30px] w-[310px]  bg-white p-[30px] rounded-[10px] h-fit'>
         <p className='text-[22px] font-[600]'>Form title</p>
           

            <form action="">
                <label htmlFor="" className='mt-[20px] block' >Label title
                <input type="text" placeholder='Placeholder content' className='border border-neutral-300 rounded-[5px] w-full p-2' />
                </label>
                
                <label htmlFor="" className='mt-[20px] block w-full' >Label title
                <select name="" id="" placeholder='hi' className='border border-neutral-300 rounded-[5px] w-full p-2 text-neutral-500'>
                    <option value="" className=''><p >Chose</p></option>
                </select>
                </label>
               
               
                <label htmlFor="" className='mt-[20px] block  w-full' >Label title
                <textarea name="" id="" cols={30} rows={7} placeholder='content here' className='border border-neutral-300 rounded-[5px] w-full p-2'></textarea>
                </label>

                <button className='bg-blue-600 text-white text-[16px] font-[500] p-2 rounded-[5px] w-full mt-[20px]'>Button title</button>
            </form>
    </div>

    </div>
  )
}
