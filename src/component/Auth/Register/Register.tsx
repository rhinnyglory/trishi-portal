import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import { gstinFormat } from '../../../constant/constant';
import './Register.css';
import { SignUp } from '../../../store/slices/user';
import { connect } from "react-redux"


type FormValues = {
    employerFname: string
    employerMname:string
    employerLname: string
    email: string
    mobile: string
    addressLine1: string
    addressLine2: string
    addressLine3: string
    companyName: string
    gstin: string
    pan: string
    pin: string
    location: string
    userName: string
    userPwd: string
    confirmPassword: string
}

const Register = (props: any) => {
    const form = useForm<FormValues>();
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = form;
    const userPwd = watch('userPwd', '');
    const confirmPassword = watch('confirmPassword', '');
    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        if (data) {
            handleShow();
            props.signUp(data);
        }
        console.log(data);
    }
    console.log(errors, "errors")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Sign Up</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row authenticate-form">
                        <div className="col-md-6">
                            <div className=" form-group mb-3">
                                <input type="text" id='employerFname' className={errors?.employerFname?.message ? "form-control is-invalid" : "form-control"} placeholder="First name *" {...register("employerFname", {
                                    required: {
                                        value: true,
                                        message: "First name is required."
                                    }, maxLength: 80
                                })} />
                                <p className='text-danger errorMsg'>{errors?.employerFname?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" id='employerMname' className="form-control" placeholder="Middle Name" {...register("employerMname")} />
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.employerLname?.message ? "form-control is-invalid" : "form-control"} placeholder="Last name *" {...register("employerLname", {
                                    required: {
                                        value: true,
                                        message: "Last name is required."
                                    }, maxLength: 100
                                })} />
                                <p className='text-danger errorMsg'>{errors.employerLname?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.email?.message ? "form-control is-invalid" : "form-control"} placeholder="Email *" {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required."
                                    },
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email!"
                                    }
                                })} />
                                <p className='text-danger errorMsg'>{errors.email?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="tel" className={errors?.mobile?.message ? "form-control is-invalid" : "form-control"} placeholder="Mobile number *" {...register("mobile", {
                                    required: {
                                        value: true,
                                        message: "Mobile number is required."
                                    }, pattern: {
                                        value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                        message: "Enter valid number!"
                                    }, minLength: 6, maxLength: 12
                                })} />
                                <p className='text-danger errorMsg'>{errors.mobile?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.addressLine1?.message ? "form-control is-invalid" : "form-control"} placeholder="Address Line 1 *" {...register("addressLine1",
                                    {
                                        required: {
                                            value: true,
                                            message: "Address line is required."
                                        }, minLength: 6, maxLength: 80
                                    })} />
                                <p className='text-danger errorMsg'>{errors.addressLine1?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className="form-control" placeholder="Address Line 2" {...register("addressLine2", { maxLength: 80 })} />
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className="form-control" placeholder="Address Line 3" {...register("addressLine3", { maxLength: 80 })} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.companyName?.message ? "form-control is-invalid" : "form-control"} placeholder="Company Name *" {...register("companyName", {
                                    required: {
                                        value: true,
                                        message: "Company name is required."
                                    }, pattern: {
                                        value: /^[a-zA-Z0-9]+$/,
                                        message: "Enter valid company name."
                                    }, minLength: 3, maxLength: 25
                                })} />
                                <p className='text-danger errorMsg'>{errors.companyName?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.gstin?.message ? "form-control is-invalid" : "form-control"} placeholder="GSTIN *" {...register("gstin", {
                                    required: {
                                        value: true,
                                        message: "GSTIN is required."
                                    }, pattern: {
                                        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
                                        message: gstinFormat
                                    }
                                })} />
                                <p className='text-danger errorMsg'>{errors.gstin?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.pan?.message ? "form-control is-invalid" : "form-control"} placeholder="PAN *" {...register("pan", {
                                    required: {
                                        value: true,
                                        message: "PAN is required."
                                    }, pattern: {
                                        value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                                        message: "Enter valid PAN Number."
                                    }, minLength: 10
                                })} />
                                <p className='text-danger errorMsg'>{errors.pan?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.pin?.message ? "form-control is-invalid" : "form-control"} placeholder="PIN Code *" {...register("pin", {
                                    required: {
                                        value: true,
                                        message: "PIN code is required."
                                    }, pattern: {
                                        value: /^\d{6}$/,
                                        message: "Enter valid PIN Code."
                                    }, minLength: 6
                                })} />
                                <p className='text-danger errorMsg'>{errors.pin?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.location?.message ? "form-control is-invalid" : "form-control"} placeholder="Location *" {...register("location", {
                                    required: {
                                        value: true,
                                        message: "Location is required."
                                    }, pattern: {
                                        value: /^[a-zA-Z\s\d\-,.'()&]+$/,
                                        message: "Enter valid Location."
                                    }, minLength: 6, maxLength: 80
                                })} />
                                <p className='text-danger errorMsg'>{errors.location?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <input type="text" className={errors?.userName?.message ? "form-control is-invalid" : "form-control"} placeholder="Username *" {...register("userName", {
                                    required: {
                                        value: true,
                                        message: "User name is required."
                                    }, minLength: 3
                                })} />
                                <p className='text-danger errorMsg'>{errors.userName?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <Controller
                                    name="userPwd"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Password is required."
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Password must be at least 8 characters long',
                                        }, pattern: {
                                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                                            message: "Enter valid Location."
                                        },
                                    }}
                                    render={({ field }) => <input type="password" className={errors?.userPwd?.message ? "form-control is-invalid" : "form-control"} placeholder="Password *" {...field} />}
                                />
                                {/* <input type="password" className={errors?.password?.message ? "form-control is-invalid" : "form-control"} placeholder="Password *" {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required."
                                    }, pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                                        message: "Enter valid Location."
                                    }, minLength: 8, maxLength: 30
                                })} /> */}
                                <p className='text-danger errorMsg'>{errors.userPwd?.message}</p>
                            </div>
                            <div className=" form-group mb-3">
                                <Controller name="confirmPassword" control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Confirm password is required."
                                        },
                                        validate: (value) =>
                                            value === userPwd || 'Passwords do not match',
                                    }}
                                    render={({ field }) => <input type="password" className={errors?.confirmPassword?.message ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password *" {...field} />}
                                />
                                {/* <input type="password" className={errors?.confirmPassword?.message ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password *" {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm password is required."
                                    },
                                    validate: (fieldValue) => {
                                        return fieldValue !== "dadsfgasdfg" || "Password is not matched!"
                                    },
                                    minLength: 8, maxLength: 30
                                })} /> */}
                                <p className='text-danger errorMsg'>{errors.confirmPassword?.message}</p>
                            </div>
                            {/* <button>Submit</button> */}
                            <input type="submit" className="btnRegister" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h3 className="register-heading">Apply as a Hirer</h3>
                <div className="row register-form">
                    <div className="col-md-6">
                        <div className=" form-group mb-3">
                            <input type="text" className="form-control" placeholder="First Name *" />
                        </div>
                        <div className=" form-group mb-3">
                            <input type="text" className="form-control" placeholder="Last Name *" />
                        </div>
                        <div className=" form-group mb-3">
                            <input type="email" className="form-control" placeholder="Email *" />
                        </div>
                        <div className=" form-group mb-3">
                            <input type="text" maxLength={10} minLength={10} className="form-control" placeholder="Phone *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className=" form-group mb-3">
                            <input type="password" className="form-control" placeholder="Password *" />
                        </div>
                        <div className=" form-group mb-3">
                            <input type="password" className="form-control" placeholder="Confirm Password *" />
                        </div>
                        <div className=" form-group mb-3">
                            <select className="form-control">
                                <option className="hidden" selected disabled>Please select your Sequrity Question</option>
                                <option>What is your Birthdate?</option>
                                <option>What is Your old Phone Number</option>
                                <option>What is your Pet Name?</option>
                            </select>
                        </div>
                        <div className=" form-group mb-3">
                            <input type="text" className="form-control" placeholder="`Answer *" />
                        </div>
                        <input type="submit" className="btnRegister" value="Register" />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You are one step away to Signin.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please enter the OTP you recieved on your mobile number.
                    <form>
                        <div className=" form-group mt-3">
                            <input type="text" className="form-control" placeholder="One time Password *" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="default" onClick={handleClose}>
                        Resend OTP
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


const mapStateToProps = (state: any) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signUp: (data: any) => dispatch(SignUp(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)