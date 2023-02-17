import Navbar from '../components/nav';

const InvestorsLanding = () => {
    return(
        <>
        <Navbar activeId={"investors"} />
        <div className="row">
                <div className="col-8">
                    <div className='hero-left'>
                        <div className='left-container'>
                            <div className='hero-title'>Page for Investors</div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='hero-right'></div>
                </div>
            </div>
        </>
    )
}
export default InvestorsLanding;