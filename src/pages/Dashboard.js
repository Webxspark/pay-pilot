import React from 'react'
import Sidebar from '../components/Sidebar'
import '../css/Dashboard.css'
import { Menu, Col, Row, Button } from 'antd';
import { CgSearch } from 'react-icons/cg'
import { useLoadingContext } from "react-router-loading";

function Dashboard() {
  const loadingContext = useLoadingContext();
  loadingContext.done()
  return (
    <div className='body-wrapper'>
      <Sidebar />
      <div className='top-nav'>
        <div style={{ display: 'flex' }}>
          <CgSearch style={{ height: '24px', width: '24px', color: 'white', marginTop: '35px', marginRight: '5px' }} />
          <input placeholder='search for payments' className='input' type="text" />
        </div>
        <Button className='connect'>Connect Wallet</Button>

      </div>
    </div>
  )
}

export default Dashboard