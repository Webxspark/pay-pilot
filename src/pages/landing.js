import Navbar from '../components/nav';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-8">
                    <div className='hero-left'>
                        <div className='left-container'>
                            <div className='hero-title'>Title Goes here</div>
                            <div className='hero-subtitle'>SubTitle</div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='hero-right'>

                    </div>
                </div>
            </div>
        </>
    );
}
export default LandingPage;