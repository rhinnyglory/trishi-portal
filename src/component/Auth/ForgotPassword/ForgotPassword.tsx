import React, { useState } from "react"
import "./ForgotPassword.css"
import { Controller, useForm } from "react-hook-form"

type FormValues = {
    userName: string
}

type FormValues1 = {
    otp: string
    userPwd: string
    confirmUserPwd: string
    userName: string
}

const ForgotPassword = () => {
    const form = useForm<FormValues>()
    const form1 = useForm<FormValues1>();
    const {
        handleSubmit: handleSubmit1,
        control: control1,
        formState: { errors: errorsForm1 },
    } = form
    const {
        handleSubmit: handleSubmit2,
        control: control2,
        watch,
        formState: { errors: errorsForm2 },
    } = form1
    const userPwd = watch("userPwd", "")
    const confirmUserPwd = watch("confirmUserPwd", "")
    const [openOTP, setOpenOTP] = useState(true)
    const onSubmitForm1 = (data: FormValues) => {
        // Handle form 1 submission
        console.log("Form 1 Data:", data)
        if (data) setOpenOTP(false)
        else setOpenOTP(true)
    }

    const onSubmitForm2 = (data: FormValues1) => {
        // Handle form 2 submission
        data['userName'] = form.getValues('userName');
        console.log("Form 2 Data:", data)
    }
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="login-heading">Forgot Password</h3>
                <div className="row authenticate-form">
                    <form onSubmit={handleSubmit1(onSubmitForm1)}>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className=" form-group mb-3">
                                    <Controller name="userName" control={control1} rules={{ required: { value: true, message: "Please enter Username." } }}
                                        render={({ field }) => <input className={errorsForm1?.userName?.message ? "form-control is-invalid" : "form-control"} placeholder="Enter username *" {...field} />} />
                                    <p className="text-danger errorMsg">{errorsForm1?.userName?.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <input type="submit" className="btnOtp" value="Send Otp" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <form onSubmit={handleSubmit2(onSubmitForm2)}>
                        <div className="row mt-4  justify-content-center">
                            <div className="col-md-6">
                                <div className=" form-group mb-3">
                                    <Controller name="otp" control={control2} rules={{ required: { value: true, message: "Please enter the OTP." } }}
                                        render={({ field }) => <input className="form-control" disabled={openOTP} placeholder="Enter Otp *" {...field} />} />
                                    <p className="text-danger errorMsg">{errorsForm2?.otp?.message}</p>
                                </div>
                                <div className="row mb-3">
                                    <h6>
                                        Didn't get Otp?{" "}
                                        <span>
                                            <a href="#login">Resend</a>
                                        </span>
                                    </h6>
                                </div>
                                <div className="form-group mb-3">
                                    <Controller
                                        name="userPwd"
                                        control={control2}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Password is required.",
                                            },
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters long",
                                            },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                                                message: "Enter valid Location.",
                                            },
                                        }}
                                        render={({ field }) => <input type="password" disabled={openOTP} className={errorsForm2?.userPwd?.message ? "form-control is-invalid" : "form-control"} placeholder="Password *" {...field} />}
                                    />
                                    <p className="text-danger errorMsg">{errorsForm2.userPwd?.message}</p>
                                </div>
                                <div className="form-group mb-3">
                                    <Controller
                                        name="confirmUserPwd"
                                        control={control2}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Confirm password is required.",
                                            },
                                            validate: (value) => value === userPwd || "Passwords do not match",
                                        }}
                                        render={({ field }) => <input type="password" disabled={openOTP} className={errorsForm2?.confirmUserPwd?.message ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password *" {...field} />}
                                    />
                                    <p className="text-danger errorMsg">{errorsForm2.confirmUserPwd?.message}</p>
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

export default ForgotPassword;

