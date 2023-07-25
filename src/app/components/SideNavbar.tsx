import React from 'react'
import {RxDashboard} from 'react-icons/rx'
import {AiOutlinePlus} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'
import SideNavbarItem from './SideNavbarItem'


export default function SideNavbar() {
  return (
    <div className='w-[260px] bg-neutral-800 '>
        <div className='py-[15px] px-[30px]  h-[77px]'>
            <div className='bg-white text-black rounded-sm p-2 flex items-center gap-1'>
                <AiOutlinePlus className=''/>
                <p>New Item</p>
            </div>
        </div>
     
        <SideNavbarItem item={'Dashboard'} subitem={['Commarce','Analytics','Cyrpto','Helpdesk']}/>
        <SideNavbarItem item={'Elements'} subitem={['']}/>
        <SideNavbarItem item={'Forms'} subitem={['']}/>
        <SideNavbarItem item={'Plugins'} subitem={['']}/>
        <SideNavbarItem item={'Elements'} subitem={['']}/>
        <SideNavbarItem item={'Datagrid'} subitem={['']}/>
        <SideNavbarItem item={'Setting'} subitem={['']}/>

    </div>
  )
}
