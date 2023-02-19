import Navbar from "../components/nav";
import { useLoadingContext } from "react-router-loading";
import SubscribeBox from "../components/subscribeBox";
import { Divider } from "antd";

const ComingSoon = (props) => {
    const LoadingState = useLoadingContext();
    LoadingState.done()
    return (
        <>
            <Navbar activeId={props.nav ? props.nav : ''} />
            <div className="row">
                <div className="col-12">
                    <div className='hero-left'>
                        <div className='left-container'>
                            <div className='fs-2 text-white'>Register here and be one of the first members to experience this app</div>
                            <div style={{
                                paddingTop: '10px'
                            }}></div>
                            <SubscribeBox />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComingSoon;