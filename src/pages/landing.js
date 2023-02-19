import Navbar from '../components/nav';
import HeroImg from '../assets/1.png'
import HeroImg2 from '../assets/2.png'
import { Button, Divider } from "antd";
import SvgDivider from '../components/divider';
import { useLoadingContext } from "react-router-loading";
import BoxesSvg from '../assets/boxes.svg';
import { Input, Space } from 'antd';
import SubscribeBox from '../components/subscribeBox';
const { Search } = Input;
const LandingPage = () => {
    const loadingContext = useLoadingContext();
    loadingContext.done()
    return (
        <div className=''>
            <Navbar />
            <div className="row">
                <div className="col-8">
                    <div className='hero-left'>
                        <div className='left-container'>
                            <div className='hero-title'>Secure, Fast Crypto Payments with Pay Pilot.</div>
                            <div className='hero-subtitle'>Make payments quickly and securely with the power of the blockchain. Enjoy secure, fast and private payments with no fees.</div>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <div className='hero-right'>
                        <img alt='hero-img' style={{
                            width: '130%'
                        }} src={HeroImg} />
                    </div>
                </div>
            </div>
            <div className="row" style={{
                position: 'relative',
                bottom: '100px'
            }}>
                {/* <SvgDivider /> */}
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <div className='hero-right'>
                        <img alt='hero-img' style={{
                            width: '100%'
                        }} src={HeroImg2} />
                    </div>
                </div>
                <div className="col-8">
                    <div className='hero-left'>
                        <div className='left-container'>
                            <div className='hero-title'>Fast transactions.</div>
                            <div className='hero-subtitle'>With Pay Pilot, transactions are carried out instantly, with no waiting time. This allows you to make secure payments in real-time.</div>
                        </div>
                        <Divider />
                        <div className='left-container'>
                            <div className='hero-title'>Enhanced Security.</div>
                            <div className='hero-subtitle'>Utilizing blockchain technology, transactions conducted with Pay Pilot are secure and reliable. All payments are protected by a variety of security protocols.</div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='testimonial-container'>
                <div className='testimonial' >
                    <img className='square-1' alt='decor' src={BoxesSvg} />
                    <blockquote cite="">
                        <p>“Pay Pilot is a great platform for making payments. It is fast, secure and easy to use. I would recommend it to anyone looking for a secure payment platform.”</p>
                        <footer className='testimonial-author'>
                            <img className='author' src="https://cdn.webxspark.com/assets/images/static-profile.webp" alt="" width={55} height={55} />
                            John Doe</footer>
                    </blockquote>
                    <img className='square-2' alt='decor' src={BoxesSvg} />
                </div>
            </section>
            <div className='divider extra'></div>
            <SubscribeBox />
        </div>
    );
}
export default LandingPage;