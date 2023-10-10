import React, { useState } from "react"
import "./ForgotPassword.css";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  mobileNumber: string
}

type FormValues1 = {
  otp: string
}

const ForgotPassword = () => {
  const form = useForm<FormValues>();
  const form1 = useForm<FormValues1>();
  const { handleSubmit: handleSubmit1, control: control1, formState: { errors: errorsForm1 } } = form;
  const { handleSubmit: handleSubmit2, control: control2, formState: { errors: errorsForm2 } } = form1;
  const [ openOTP, setOpenOTP ] = useState(true)
  const onSubmitForm1 = (data: FormValues) => {
    // Handle form 1 submission
    console.log("Form 1 Data:", data);
    if(data)
      setOpenOTP(false)
    else
      setOpenOTP(true)
  };

  const onSubmitForm2 = (data: FormValues1) => {
    // Handle form 2 submission
    console.log("Form 2 Data:", data);
  };
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab">
        <h3 className="login-heading">Forgot Password</h3>
        <div className="row authenticate-form">
          <form onSubmit={handleSubmit1(onSubmitForm1)}>
            <div className="row">
              <div className="col-md-6 offset-3">
                <div className=" form-group mb-3">
                  <Controller
                    name="mobileNumber"
                    control={control1}
                    rules={{ required: { value: true, message: "Please enter the Mobile Number." } }}
                    render={({ field }) => <input className="form-control" placeholder="Enter mobile number *" {...field} />}
                  />
                  <p className='text-danger errorMsg'>{errorsForm1?.mobileNumber?.message}</p>
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
          </form>
          <div className="row mt-4">
            <h6>
              Didn't get Otp?{" "}
              <span>
                <a href="#login">Resend</a>
              </span>
            </h6>
          </div>
          <form onSubmit={handleSubmit2(onSubmitForm2)}>
            <div className="row mt-4">
              <div className="col-md-6 offset-3">
                <div className=" form-group">
                  <Controller
                    name="otp"
                    control={control2}
                    rules={{ required: { value: true, message: "Please enter the OTP." } }}
                    render={({ field }) => <input className="form-control" disabled={openOTP} placeholder="Enter Otp *" {...field} />}
                  />
                  <p className='text-danger errorMsg'>{errorsForm2?.otp?.message}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mt-3">
                <div className="form-group">
                  <input type="submit" disabled={openOTP} className="btnOtp" value="Submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
