import { useState } from 'react';
import { Menu, Col, Row, Button } from 'antd';
const Navbar = () => {
    const items = [
        {
            label: (
                <a href="#" className='nav-link' rel="noopener noreferrer">Brand for Traders</a>
            )
        },
        {
            label: (
                <a href="#" className='nav-link' rel="noopener noreferrer">Brand for Investors</a>
            )
        },
        {
            label: (
                <a href="#" className='nav-link' rel="noopener noreferrer">Live Market Tracking</a>
            )
        },
        {
            label: (
                <a href="#" className='nav-link' rel="noopener noreferrer">About Us</a>
            )
        },
        {
            label: (
                <a href="#" className='nav-link' rel="noopener noreferrer">Blog</a>
            )
        },
    ];
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <div className='nav-container'>
                <Row>
                    <Col span={4}>
                        <h3><a href="/" className='nav-link'>Logo</a></h3>
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
        </>
    )
}
export default Navbar;