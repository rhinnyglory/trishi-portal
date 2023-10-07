import React from "react"
import "./ForgotPassword.css"

const ForgotPassword = () => {
  return (
    <div>
      <div className="container-fluid login registration-block">
        <div className="row">
          <div className="col-md-3 login-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde repellendus,
              necessitatibus
            </p>
            <input type="submit" name="" value="Login" />
            <br />
          </div>
          <div className="col-md-9 login-right">
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Recruiter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Employee
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="login-heading">Trishi Portal</h3>
                <div className="row login-form">
                  <h6>Forgot Password</h6>
                  <div className="row">
                    <div className="col-md-6 offset-3">
                      <div className=" form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email or Mobile No *"
                          value=""
                        />
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
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Otp *"
                          value=""
                        />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
