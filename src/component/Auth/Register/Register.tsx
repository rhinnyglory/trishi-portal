import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form";
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import { gstinFormat } from '../../../constant/constant';
import './Register.css';
import { SignUpForEmployer } from '../../../store/slices/user';
import { connect } from "react-redux";
import ModalPopup from '../../../common/Modal/Modal';
import { useLocation } from 'react-router-dom';
// import { createWorker } from "tesseract.js";
import { FormValues, EmployeeFormValues } from '../../../constant/constant';

const Register = (props: any) => {
    const { handleSubmit: handleSubmitForm1, register, watch, control: control, formState: { errors }, getValues: getValuesForm1, reset: resetForm1 } = useForm<FormValues>();
    const { handleSubmit: handleSubmitForm2, control: controlForm2, setValue: setValueForm2, formState: { errors: errorsForm2 }, reset: resetForm2 } = useForm<FormValues>();
    const { handleSubmit: handleSubmitForm3, control: controlForm3, setValue: setValueForm3, formState: { errors: errorsForm3 }, getValues: getValuesForm3, reset: resetForm3 } = useForm<EmployeeFormValues>();
    const userPwdRec = watch('userPwd', '');
    const userPwdEmp = useWatch({ control: controlForm3, name: "userPwd" });
    const [isRecUsernameAvbl, setIsRecUsernameAvbl] = useState(false);
    const [isEmpUsernameAvbl, setIsEmpUsernameAvbl] = useState(false);
    // const confirmPassword = watch('confirmPassword', '');
    // const confirmPasswordRec = useWatch({ control: control, name: "confirmPassword" });
    // const confirmPasswordEmp = useWatch({ control: controlForm2, name: "confirmPassword" });

    const onSubmitOTP = (data: FormValues | EmployeeFormValues) => {
        if (data) {
            const form1Values = showRecruiter == "Employee" ? getValuesForm3() : getValuesForm1();
            form1Values['otpValue'] = data.otpValue;
            console.log(form1Values, "final data");
            props.signUp(form1Values);
        }
    }

    const GenerateOTPForSignUp = (data: FormValues | EmployeeFormValues) => {
        const formValues = showRecruiter == "Employee" ? getValuesForm3() : getValuesForm1();
        if (formValues) {
            let OtpObj = showRecruiter == "Employee" ? { "userName": formValues.userName } : {
                "pan": formValues.pan,
                "mobile": formValues.mobile,
                "email": formValues.email,
                "userName": formValues.userName,
                "gstin": formValues.gstin
            }
            handleShow();
            console.log(OtpObj, "check", data)
        }
    }

    let timer: any = 0;
    const CheckRecUsernameAvailability = (e: any) => {
        clearTimeout(timer);
        if (e.target.value != "") {
            timer = setTimeout(() => {
                setIsRecUsernameAvbl(!isRecUsernameAvbl)
                console.log("hellooooo", e.target.value)
            }, 3000);
        }
    }

    const CheckEmpUsernameAvailability = (e: any) => {
        console.log("Form 1 Input value changed:", e.target.value);
        clearTimeout(timer);
        if (e.target.value != "") {
            timer = setTimeout(() => {
                setIsEmpUsernameAvbl(!isEmpUsernameAvbl)
                console.log("hiiiiii", e.target.value)
            }, 3000);
        }
    };

    console.log(errors, "errors")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();
    const [showRecruiter, setShowRecruiter] = useState("Employee");

    useEffect(() => {
        resetForm1();
        resetForm2();
        resetForm3();
    }, [showRecruiter]);


    return (
        <>
            {location.pathname == "/register" ?
                <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className={showRecruiter == "Employee" ? "nav-link active" : "nav-link"} id="profile-tab" data-toggle="tab" onClick={() => setShowRecruiter("Employee")} role="tab" aria-controls="profile" aria-selected="false">Employee</a>
                    </li>
                    <li className="nav-item">
                        <a className={showRecruiter == "Recruiter" ? "nav-link active" : "nav-link"} id="home-tab" data-toggle="tab" onClick={() => setShowRecruiter("Recruiter")} role="tab" aria-controls="home" aria-selected="true">Recruiter</a>
                    </li>
                </ul> : <></>}
            <div className="tab-content" id="myTabContent">
                {showRecruiter == "Recruiter" ?
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 className="register-heading">Sign Up</h3>
                        {/* Recruiter Form */}
                        <form onSubmit={handleSubmitForm1(GenerateOTPForSignUp)}>
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
                                        <p>{isRecUsernameAvbl}</p>
                                        <Controller
                                            name="userName"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "User name is required."
                                                }, minLength: 3, validate: (value) => isRecUsernameAvbl || 'Please enter unique username'
                                            }}
                                            render={({ field }) => (
                                                <input className={errors?.userName?.message ? "form-control is-invalid" : !isRecUsernameAvbl ? "form-control" : "form-control is-valid"} placeholder="Username *"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e); // This is necessary to update the form state
                                                        CheckRecUsernameAvailability(e); // Custom onChange handling for form 1 
                                                    }}
                                                />
                                            )}
                                        />
                                        {/* <input type="text" className={errors?.userName?.message ? "form-control is-invalid" : "form-control"} placeholder="Username *" {...register("userName", {
                                            required: {
                                                value: true,
                                                message: "User name is required."
                                            },
                                            validate: (value: any) =>
                                                value == CheckUsernameAvailability(value) || "Please enter different username", minLength: 3
                                        })} /> */}
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
                                                    value === userPwdRec || 'Passwords do not match',
                                            }}
                                            render={({ field }) => <input type="password" className={errors?.confirmPassword?.message ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password *" {...field} />}
                                        />
                                        <p className='text-danger errorMsg'>{errors.confirmPassword?.message}</p>
                                    </div>
                                    <input type="submit" className="btnRegister" value="Register" />
                                </div>
                            </div>
                        </form>
                    </div> :
                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h3 className="register-heading">Sign Up</h3>
                        {/* Employee Form */}
                        <form onSubmit={handleSubmitForm3(GenerateOTPForSignUp)}>
                            <div className="row authenticate-form">
                                <div className="col-md-6">
                                    <div className=" form-group mb-3">
                                        <Controller name="name" control={controlForm3} rules={{ required: { value: true, message: "Name is required." } }}
                                            render={({ field }) => <input type='text' className={errorsForm3?.name?.message ? "form-control is-invalid" : "form-control"} placeholder="Name *" {...field} />} />
                                        <p className="text-danger errorMsg">{errorsForm3?.name?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller
                                            name="aadharCardPic"
                                            control={controlForm3}
                                            rules={{
                                                required: { value: true, message: "Aadhar card pic is required." },
                                                validate: (value: any) => {
                                                    if (value.size > 5 * 1024 * 1024 || value.size < 2 * 1024 * 1024) {
                                                        return `File size must be less than ${5}MB and greater than ${2}MB`;
                                                    }
                                                    return true;
                                                }
                                            }} render={({ field }) => (
                                                <input type="file" accept="image/png, image/jpg, image/jpeg" className={errorsForm3?.aadharCardPic?.message ? "form-control is-invalid" : "form-control"}
                                                    onChange={(e) => { field.onChange(e.target.files); setValueForm3("aadharCardPic", e.target?.files != null ? e.target?.files[0] : {}); }} />
                                            )}
                                        />
                                        <p className="text-danger errorMsg">{errorsForm3?.aadharCardPic?.message}</p>
                                    </div>
                                    <div className="form-group mb-3">
                                        <Controller name="aadharNumber" control={controlForm3} rules={{ required: { value: true, message: "Last 6 digits of aaadhar is required." } }}
                                            render={({ field }) => <input type='text' className={errorsForm3?.aadharNumber?.message ? "form-control is-invalid" : "form-control"} placeholder="last 6 digits of aadhar *" {...field} />} />
                                        <p className="text-danger errorMsg">{errorsForm3?.aadharNumber?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="pan" control={controlForm3} rules={{
                                            required: { value: true, message: "PAN is required." }, pattern: {
                                                value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                                                message: "Enter valid PAN Number."
                                            }, minLength: 10
                                        }} render={({ field }) => <input type='text' className={errorsForm3?.pan?.message ? "form-control is-invalid" : "form-control"} placeholder="PAN *" {...field} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.pan?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="mobile" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "Mobile number is required."
                                            }, pattern: {
                                                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                                message: "Enter valid number!"
                                            }, minLength: 6, maxLength: 12
                                        }} render={({ field }) => <input type='tel' className={errorsForm3?.mobile?.message ? "form-control is-invalid" : "form-control"} placeholder="Mobile number *" {...field} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.mobile?.message}</p>
                                    </div>
                                    <div className="form-group mb-3">
                                        <Controller name="email" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "Email is required."
                                            },
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email!"
                                            }
                                        }} render={({ field }) => <input type='email' className={errorsForm3?.email?.message ? "form-control is-invalid" : "form-control"} placeholder="Email *" {...field} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.email?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="pin" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "PIN code is required."
                                            }, pattern: {
                                                value: /^\d{6}$/,
                                                message: "Enter valid PIN Code."
                                            }, minLength: 6
                                        }} render={({ field }) => <input type='text' className={errorsForm3?.pin?.message ? "form-control is-invalid" : "form-control"} placeholder="PIN Code *" {...field} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.pin?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="area" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "Address line is required."
                                            }, minLength: 6, maxLength: 80
                                        }} render={({ field }) => <textarea className={errorsForm3?.area?.message ? "form-control is-invalid" : "form-control"} placeholder="Area *" {...field} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.area?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="state" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "State is required."
                                            }
                                        }} render={({ field }) =>
                                            <select className={errorsForm3?.state?.message ? "form-control is-invalid" : "form-control"} placeholder='Select state' {...field}>
                                                <option selected value={""} disabled>Select state</option>
                                                <option value={"AP"}>AP</option>
                                                <option value={"UP"}>UP</option>
                                                <option value={"MP"}>MP</option>
                                            </select>} />
                                        <p className='text-danger errorMsg'>{errorsForm3.state?.message}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <Controller name="district" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "State is required."
                                            }
                                        }} render={({ field }) =>
                                            <select className={errorsForm3?.district?.message ? "form-control is-invalid" : "form-control"} placeholder='Select district' {...field}>
                                                <option selected value={""} disabled>Select district</option>
                                                <option value={"Krishna"}>Krishna</option>
                                                <option value={"Guntur"}>Guntur</option>
                                                <option value={"Godavari"}>Godavari</option>
                                                <option value={"Kurnool"}>Kurnool</option>
                                            </select>} />
                                        <p className='text-danger errorMsg'>{errorsForm3.district?.message}</p>
                                    </div>
                                    <div className="form-group mb-3">
                                        <Controller name="mandal" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "Mandal is required."
                                            }
                                        }} render={({ field }) =>
                                            <select className={errorsForm3?.mandal?.message ? "form-control is-invalid" : "form-control"} placeholder='Select district' {...field}>
                                                <option selected value={""} disabled>Select mandal</option>
                                                <option value={"Bandar"}>Bandar</option>
                                                <option value={"Pedana"}>Pedana</option>
                                                <option value={"Gudivada"}>Gudivada</option>
                                                <option value={"Vijayawada"}>Vijayawada</option>
                                            </select>} />
                                        <p className='text-danger errorMsg'>{errorsForm3.mandal?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="accountNum" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "Account Number is required."
                                            }, pattern: {
                                                value: /^\d{9,18}$/,
                                                message: "Enter valid Account number."
                                            }, minLength: 9, maxLength: 18
                                        }} render={({ field }) => <input type='text' className={errorsForm3?.accountNum?.message ? "form-control is-invalid" : "form-control"} placeholder="Account Number *" {...field} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.accountNum?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="ifsc" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "IFSC code is required."
                                            }, pattern: {
                                                value: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,
                                                message: "Enter valid IFSC Code."
                                            }
                                        }} render={({ field }) => <input type='text' className={errorsForm3?.ifsc?.message ? "form-control is-invalid" : "form-control"} placeholder="IFSC Code *" {...field} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.ifsc?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="bankName" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "Bank name is required."
                                            }
                                        }} render={({ field }) => <input type='text' className={errorsForm3?.bankName?.message ? "form-control is-invalid" : "form-control"} placeholder="Bank name *" {...field} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.bankName?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="accountType" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "Mandal is required."
                                            }
                                        }} render={({ field }) =>
                                            <select className={errorsForm3?.accountType?.message ? "form-control is-invalid" : "form-control"} placeholder='Select district' {...field}>
                                                <option selected disabled>Select Account type</option>
                                                <option>Savings</option>
                                                <option>Current</option>
                                                <option>Demat</option>
                                            </select>} />
                                        <p className='text-danger errorMsg'>{errorsForm3.accountType?.message}</p>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <Controller name="userName" control={controlForm3} rules={{
                                            required: {
                                                value: true,
                                                message: "Username is required."
                                            }, validate: (value) => isEmpUsernameAvbl || 'Please enter unique username', minLength: 3
                                        }} render={({ field }) => <input type='text' className={errorsForm3?.userName?.message ? "form-control is-invalid" : !isEmpUsernameAvbl ? "form-control" : "form-control is-valid"} placeholder="Username *" {...field} onChange={(e) => {
                                            field.onChange(e);
                                            CheckEmpUsernameAvailability(e);
                                        }} />} />
                                        <p className='text-danger errorMsg'>{errorsForm3.userName?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller
                                            name="userPwd"
                                            control={controlForm3}
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
                                            render={({ field }) => <input type="password" className={errorsForm3?.userPwd?.message ? "form-control is-invalid" : "form-control"} placeholder="Password *" {...field} />}
                                        />
                                        <p className='text-danger errorMsg'>{errorsForm3.userPwd?.message}</p>
                                    </div>
                                    <div className=" form-group mb-3">
                                        <Controller name="confirmPassword" control={controlForm3}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Confirm password is required."
                                                },
                                                validate: (value) =>
                                                    value === userPwdEmp || 'Passwords do not match',
                                            }}
                                            render={({ field }) => <input type="password" className={errorsForm3?.confirmPassword?.message ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password *" {...field} />}
                                        />
                                        <p className='text-danger errorMsg'>{errorsForm3.confirmPassword?.message}</p>
                                    </div>
                                    <input type="submit" className="btnRegister" value="Register" />
                                </div>
                            </div>
                        </form>
                    </div>
                }
                <ModalPopup showPopup={show} handleShow={handleShow} handleClose={handleClose} titleName={"You are one step away to Signin."}>
                    <form onSubmit={handleSubmitForm2(onSubmitOTP)}>
                        <div className="row authenticate-form">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className=" form-group mt-3 mb-3">
                                        <Controller name="otpValue" control={controlForm2} rules={{ required: { value: true, message: "Please enter Username." } }}
                                            render={({ field }) => <input className={errorsForm2?.otpValue?.message ? "form-control is-invalid" : "form-control"} placeholder="Enter username *" {...field} />} />
                                        <p className="text-danger errorMsg">{errorsForm2?.otpValue?.message}</p>
                                    </div>
                                </div>
                            </div>

                            <Modal.Footer>
                                <Button variant="default" onClick={handleClose}>
                                    Resend OTP
                                </Button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" type='submit'>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </div>
                    </form>
                </ModalPopup>
            </div>
        </>
    )
}


const mapStateToProps = (state: any) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signUp: (data: any) => dispatch(SignUpForEmployer(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);
