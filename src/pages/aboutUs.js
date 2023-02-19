import { Divider, Row, Col } from "antd";
import { useLoadingContext } from "react-router-loading";
import Navbar from "../components/nav";
import SubscribeBox from "../components/subscribeBox";
import HeroImg from '../assets/screen.webp';

import Alan from '../assets/team/alan.png';
import Mithun from '../assets/team/mithun.jpeg';
import Kaushik from '../assets/team/kaushik.jpeg';
import Jayna from '../assets/team/jayna.jpeg';
import Kalpitha from '../assets/team/kalpitha.jpeg';
import TeamMember from "../components/teamMembers";
const AboutUs = () => {
    const loadingContext = useLoadingContext();
    loadingContext.done();
    return (
        <>
            <Navbar activeId="aboutUs" />
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-8 col-md-8">
                    <div className='hero-left'>
                        <div className='left-container'>
                            <div className='hero-title'>About Us</div>
                            <div className='hero-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ipsum ut commodo placerat. Duis eros dui, maximus id porttitor ac, varius id nunc. Duis molestie augue non mauris placerat eleifend. Vivamus quis lobortis lorem. Nullam mollis elit quis eros congue, et pellentesque enim feugiat. Quisque convallis semper tortor, ac imperdiet nunc egestas sit amet. Curabitur pharetra magna leo, sed tristique nisi eleifend sed. Donec massa quam, lacinia sit amet diam ac, sollicitudin condimentum augue. Mauris tincidunt quam in purus pretium porttitor. Cras quis ligula eu odio tempor varius. Pellentesque gravida ante est, vitae porttitor dui congue vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <div className='hero-right'>
                        <img alt='hero-img' className="about-us d-none d-md-block d-lg-block" style={{
                            width: '130%'
                        }} src={HeroImg} />
                    </div>
                </div>
            </div>
            <Divider plain className="text-white fs-1">Meet our team</Divider>
            <Row justify={"center"} gutter={24}>
                <Col span={4} offset={0} className={""}>
                    <div class="card h-100">
                        <TeamMember
                            src={Alan}
                            name="Alan Christofer"
                            position="Developer"
                        />
                    </div>
                </Col>
                <Col span={4} className={""}>
                    <div class="card h-100">
                        <TeamMember
                            src={Mithun}
                            name="Mithun Chandar"
                            position="Developer"
                        />
                    </div>
                </Col>
                <Col span={4} className={""}>
                    <div class="card h-100">
                        <TeamMember
                            src={Kaushik}
                            name="Kaushik"
                            position="Developer"
                        />
                    </div>
                </Col>
                <Col span={4} className={""}>
                    <div class="card h-100">
                        <TeamMember
                            src={Jayna}
                            name="Jayna Mukesh"
                            position="Developer"
                        />
                    </div>
                </Col>
                <Col span={4} className={""}>
                    <div class="card h-100">
                        <TeamMember
                            src={Kalpitha}
                            name="Kalpitha"
                            position="Developer"
                        />
                    </div>
                </Col>
            </Row>
            <Divider />
            <SubscribeBox />
        </>
    )
}
export default AboutUs;