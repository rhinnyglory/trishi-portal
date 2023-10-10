import React from "react"
import "./ResetPassword.css"

const ResetPassword = () => {
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="login-heading">Reset Password</h3>
                <div className="row authenticate-form">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className=" form-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter new password *" value="" />
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className="form-control" placeholder="Confirm password *" value="" />
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="submit" className="btnReset" value="Reset" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
