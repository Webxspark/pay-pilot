import Navbar from '../components/nav';
import HeroImg from '../assets/1.png'
import HeroImg2 from '../assets/2.png'
import { Divider } from "antd";
import SvgDivider from '../components/divider';

const LandingPage = () => {
    return (
        <>
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
                <SvgDivider />
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
        </>
    );
}
export default LandingPage;