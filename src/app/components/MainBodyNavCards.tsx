import Image from 'next/image'
import React from 'react'

export default function MainBodyNavCards({image,name,price}:{image:string,name:string,price:number}) {

  return (
    <div className='w-[265px] h-[91px] p-[20px] rounded-[10px] flex items-center gap-[10px] bg-white'>
      <Image src={image} alt='no' width={45} height={45}/>
      <div>
        <p className='text-[12px] font-[300] '>{name}</p>
        <p className='text-[22px] font-[600]'>${new Intl.NumberFormat().format(price)}</p>
      </div>
    </div>
  )
}
