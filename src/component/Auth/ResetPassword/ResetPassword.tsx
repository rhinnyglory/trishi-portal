import React from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import "./ResetPassword.css"

type FormValues = {
    password: string
    confirmPassword: string
}

const ResetPassword = () => {
    const form = useForm<FormValues>()
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = form
    const password = watch("password", "")
    const confirmPassword = watch("confirmPassword", "")
    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        if (data) {
            console.log(data)
        }
    }
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="login-heading">Reset Password</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row authenticate-form">
                        <div className="row">
                            <div className="col-md-6 offset-3">
                                <div className="form-group mb-3">
                                    <Controller
                                        name="password"
                                        control={control}
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
                                        render={({ field }) => <input type="password" className={errors?.password?.message ? "form-control is-invalid" : "form-control"} placeholder="Password *" {...field} />}
                                    />
                                    <p className="text-danger errorMsg">{errors.password?.message}</p>
                                </div>
                                <div className="form-group mb-3">
                                    <Controller
                                        name="confirmPassword"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Confirm password is required.",
                                            },
                                            validate: (value) => value === password || "Passwords do not match",
                                        }}
                                        render={({ field }) => <input type="password" className={errors?.confirmPassword?.message ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password *" {...field} />}
                                    />
                                    <p className="text-danger errorMsg">{errors.confirmPassword?.message}</p>
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
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
