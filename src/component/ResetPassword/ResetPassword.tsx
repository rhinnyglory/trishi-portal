import React from "react"
import "./ResetPassword.css"

const ResetPassword = () => {
  return (
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
                <h6>Reset Password</h6>
                <div className="row">
                  <div className="col-md-6 offset-3">
                    <div className=" form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter new password *"
                        value=""
                      />
                    </div>
                    <div className=" form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Confirm password *"
                        value=""
                      />
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
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
