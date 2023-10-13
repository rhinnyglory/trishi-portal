import React from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { SignIn } from "../../../store/slices/user"
import { connect } from "react-redux"

type FormValues = {
    userName: string
    password: string
}

const Login = (props: any) => {
    const form = useForm<FormValues>()
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = form

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        if (data) {
            console.log(data);
            props.signIn(data);
        }
    }
    console.log(errors, "errors")

    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="login-heading">Signin</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row authenticate-form">
                        <div className="row">
                            <div className="col-md-6 offset-3">
                                <div className=" form-group mb-3">
                                    <input
                                        type="text"
                                        className={errors?.userName?.message ? "form-control is-invalid" : "form-control"}
                                        placeholder="Username *"
                                        {...register("userName", {
                                            required: {
                                                value: true,
                                                message: "User name is required.",
                                            },
                                            minLength: 3,
                                        })}
                                    />
                                    <p className="text-danger errorMsg">{errors.userName?.message}</p>
                                </div>
                                <div className=" form-group mb-3">
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
                                        }}
                                        render={({ field }) => <input type="password" className={errors?.password?.message ? "form-control is-invalid" : "form-control"} placeholder="Password *" {...field} />}
                                    />
                                    <p className="text-danger errorMsg">{errors.password?.message}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <input type="submit" className="btnlogin" value="Login" />
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
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (data: any) => dispatch(SignIn(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
