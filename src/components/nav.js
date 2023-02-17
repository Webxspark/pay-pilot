import { useState } from 'react';
import { Menu, Col, Row, Button } from 'antd';
import { Link, Outlet } from "react-router-dom";

const Navbar = (props) => {
    const items = [
        {
            label: (
                <Link to="/traders" className='nav-link' rel="noopener noreferrer">Brand for Traders</Link>
            ),
            key: "traders"
        },
        {
            label: (
                <Link to="/investors" className='nav-link' rel="noopener noreferrer">Brand for Investors</Link>
            ),
            key: "investors"
        },
        {
            label: (
                <Link to="#" className='nav-link' rel="noopener noreferrer">Live Market Tracking</Link>
            ),
            key: "marketTracking"
        },
        {
            label: (
                <Link to="#" className='nav-link' rel="noopener noreferrer">About Us</Link>
            ),
            key: "aboutUs"
        },
        {
            label: (
                <Link to="#" className='nav-link' id='blog' rel="noopener noreferrer">Blog</Link>
            ),
            key: "blog"
        },
    ];
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    setTimeout(() => {
        if (props.activeId) {
            setCurrent(props.activeId);
        }
    }, 0);
    return (
        <>
            <div className='nav-container'>
                <Row>
                    <Col span={4}>
                        <h3><Link to="/" className='nav-link'>Logo</Link></h3>
                    </Col>
                    <Col span={14}>
                        <Menu
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode="horizontal"
                            items={items}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#fff'
                            }}
                            theme="dark"
                        />
                    </Col>
                    <Col span={6}>
                        <div className='text-end'>
                            <Button
                                shape='round'
                                size='large'
                                className='connectWalletBtn'
                            >Connect Wallet</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Outlet />
        </>
    )
}
export default Navbar;