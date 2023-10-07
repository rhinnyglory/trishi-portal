import React from "react"
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <h3 className="login-heading">Signin</h3>
        <div className="row authenticate-form">
          <div className="row">
            <div className="col-md-6 offset-3">
              <div className=" form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name *"
                  value=""
                />
              </div>
              <div className=" form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password *"
                  value=""
                />
              </div>
              <div className="form-check d-flex">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label px-2" htmlFor="flexCheckDefault">
                  Remember
                </label>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-md-8">
              <div className="form-group">
                <input type="submit" className="btnRegister" value="Login" />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <h6>
              Forget Password{" "}
              <span>
                <Link to="/auth/forgotPassword">Click Here</Link>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
