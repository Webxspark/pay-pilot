import {Divider, Input} from "antd";
const {Search} = Input;
const SubscribeBox = (props) => {
    return (
        <>
            <div className={"row "+props.className}>
                <div className="col-12">
                    <div class="subscribe-box">
                        <div className='content'>
                            <h2>Join our community of fans that love Pay Pilot</h2>
                            <Divider />
                            <div className='form'>
                                <Search
                                    placeholder="Enter your email..."
                                    allowClear
                                    enterButton="Join the waiting list"
                                    size="large"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
        </>
    )
}
export default SubscribeBox;