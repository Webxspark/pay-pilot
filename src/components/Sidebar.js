import React from 'react'
import './sidebar.css'
import {TbLayoutDashboard,TbReportMoney,TbAdjustmentsAlt,TbAddressBook} from 'react-icons/tb'
import {FiMap} from 'react-icons/fi'

function Sidebar() {
  return (
    <div >
        <div className='sidebar'>
            <div >
                <img className='logo' src="https://cdn.freebiesupply.com/logos/large/2x/best-logo-png-transparent.png" alt="" />
            </div>
            <div className='icons'>
                <a className='icon' href=""><TbLayoutDashboard style={{height:'24px', width: '24px', color: 'white'}}/></a>
                <a className='icon' href=""><TbAddressBook style={{height:'24px', width: '24px',color: 'white'}}/></a>
                <a className='icon' href=""><TbAdjustmentsAlt style={{height:'24px', width: '24px',color: 'white'}}/></a>
                <a className='icon' href=""><FiMap style={{height:'24px', width: '24px',color: 'white'}}/></a>
                <a className='icon' href=""><TbReportMoney style={{height:'24px', width: '24px',color: 'white'}}/></a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar