import React from 'react'
import Sidebar from '../components/Sidebar'
import '../css/Dashboard.css'
import { Menu, Col, Row, Button, Divider } from 'antd';
import { CgSearch } from 'react-icons/cg'
import { useLoadingContext } from "react-router-loading";
import SubscribeBox from '../components/subscribeBox';

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
      <Divider />
      <Row>
        <Col span={3} ></Col>
        <Col span={21} >
          <div className='fs-3 mx-4 text-white'>Register here and be one of the first members to experience this app</div>
          <div style={{
            paddingTop: '10px'
          }}></div>
          <SubscribeBox className="mx-4" />
        </Col>
      </Row>
    </div>

  )
}

export default Dashboard