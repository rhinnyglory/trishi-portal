import React from "react"
import "./Register.css"

const Register = () => {
  return (
    <div className="container-fluid register registration-block">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde repellendus,
            necessitatibus
          </p>
          <input type="submit" name="" value="Login" />
          <br />
        </div>
        <div className="col-md-9 register-right">
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
              <h3 className="register-heading">Trishi Portal</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Middle Name *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      minLength={10}
                      maxLength={10}
                      name="txtEmpPhone"
                      className="form-control"
                      placeholder="Your Phone *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address Line 1 *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address Line 2 *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address Line 3 *"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input type="text" className="form-control" placeholder="GSTIN *" value="" />
                  </div>
                  <div className=" form-group mb-3">
                    <input type="text" className="form-control" placeholder="PAN *" value="" />
                  </div>
                  <div className=" form-group mb-3">
                    <input type="text" className="form-control" placeholder="PIN Code *" value="" />
                  </div>
                  <div className=" form-group mb-3">
                    <input type="text" className="form-control" placeholder="Location *" value="" />
                  </div>
                  <div className=" form-group mb-3">
                    <input type="text" className="form-control" placeholder="Username *" value="" />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                      value=""
                    />
                  </div>
                  <input type="submit" className="btnRegister" value="Register" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <h3 className="register-heading">Apply as a Hirer</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input type="email" className="form-control" placeholder="Email *" value="" />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="text"
                      maxLength={10}
                      minLength={10}
                      className="form-control"
                      placeholder="Phone *"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className=" form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                      value=""
                    />
                  </div>
                  <div className=" form-group mb-3">
                    <select className="form-control">
                      <option className="hidden" selected disabled>
                        Please select your Sequrity Question
                      </option>
                      <option>What is your Birthdate?</option>
                      <option>What is Your old Phone Number</option>
                      <option>What is your Pet Name?</option>
                    </select>
                  </div>
                  <div className=" form-group mb-3">
                    <input type="text" className="form-control" placeholder="`Answer *" value="" />
                  </div>
                  <input type="submit" className="btnRegister" value="Register" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
