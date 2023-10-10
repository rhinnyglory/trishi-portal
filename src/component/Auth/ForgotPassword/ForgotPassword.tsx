import React from "react"
import "./ForgotPassword.css"

const ForgotPassword = () => {
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="login-heading">Forgot Password</h3>
                <div className="row authenticate-form">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className=" form-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter Email or Mobile No *" value="" />
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="submit" className="btnOtp" value="Send Otp" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <h6>
                            Didn't get Otp?{" "}
                            <span>
                                <a href="#login">Resend</a>
                            </span>
                        </h6>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 offset-3">
                            <div className=" form-group">
                                <input type="text" className="form-control" placeholder="Enter Otp *" value="" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 mt-3">
                            <div className="form-group">
                                <input type="submit" className="btnOtp" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
