import React from 'react';
import { useForm, Resolver } from "react-hook-form";
import './Register.css';

type Inputs = {
    firstName: string
    lastName: string
}

const resolver: Resolver<Inputs> = async (values) => {
    return {
        values: values.firstName ? values : {},
        errors: !values.firstName ? {
            firstName: {
                type: "required",
                message: "This is required.",
            },
        } : {},
    }
}

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors['First name']?.type);


    return (
        <div className="container-fluid register registration-block">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde repellendus, necessitatibus sit et in architecto! Doloremque excepturi laboriosam ratione laborum sequi nobis sunt voluptate esse. Natus consequuntur doloremque ad!</p>
                    <input type="submit" name="" value="Login" /><br />
                </div>
                <div className="col-md-9 register-right">
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Recruiter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Employee</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Trishi Portal</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Middle Name *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="tel" className="form-control" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Address Line 1 *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Address Line 2 *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Address Line 3 *" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Company Name *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="GSTIN *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="PAN *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="PIN Code *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Location *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="text" className="form-control" placeholder="Username *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="password" className="form-control" placeholder="Password *" />
                                        </div>
                                        <div className=" form-group mb-3">
                                            <input type="password" className="form-control" placeholder="Confirm Password *" />
                                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register