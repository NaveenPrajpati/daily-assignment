import React from 'react'
import MainbodyNavbar from './MainbodyNavbar'
import MainBodyNavCards from './MainBodyNavCards'
import MainBodyListView from './MainBodyListView'
import MainBodyForm1 from './MainBodyForm1'
import MainBodyForm2 from './MainBodyForm2'


export default function MainBody() {
  return (
    <div className='bg-neutral-100 text-black w-full'>
        <MainbodyNavbar/>
        <div className='flex gap-[20px] m-[30px] items-center flex-wrap'>
            <MainBodyNavCards image={'/images/u_shopping-bag.png'} name={'Total Sales'} price={2456} />
            <MainBodyNavCards image={'/images/u_shop.png'} name={'Total Expenses'} price={3326} />
            <MainBodyNavCards image={'/images/u_users-alt.png'} name={'Total Visitors'} price={5325} />
            <MainBodyNavCards image={'/images/u_list-ui-alt.png'} name={'Total Orders'} price={1326} />
        </div>
        <MainBodyListView/>
        <MainBodyForm1/>
        <MainBodyForm2/>
    </div>
  )
}
