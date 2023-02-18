import Navbar from '../components/nav';
import { useLoadingContext } from "react-router-loading";

const TradersLanding = () => {
    const loadingContext = useLoadingContext();
    loadingContext.done()
    return (
        <>
            <Navbar activeId={"traders"} />
            <div className="row">
                <div className="col-8">
                    <div className='hero-left'>
                        <div className='left-container'>
                            <div className='hero-title'>Page for traders</div>
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
export default TradersLanding;