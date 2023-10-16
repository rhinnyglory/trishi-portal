import React from "react"

import "./EmployeeProfile.css"

type FormValues = {
    employerFname: string
    employerMname: string
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
}

const EmployeeProfile = (props: any) => {
    return (
        <div className="container mt-3">
            <h3 className="mb-4 pb-1">Employee Profile Edit</h3>
            <form className="row g-3 shadow-lg bg-white rounded mb-4 pt-3 pb-4 px-4">
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Upload your Adhar Card (png/jpg)
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Confirm last 4 digits of aadhar number
                    </label>
                    <input className="form-control" type="text" placeholder="Enter last 4 digits" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Name
                    </label>
                    <input className="form-control" placeholder="Your name" readOnly type="text" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Pan
                    </label>
                    <input className="form-control" placeholder="Enter pan card number" type="text" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Mobile
                    </label>
                    <input className="form-control" placeholder="Enter your mobile number" type="number" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Mail Id
                    </label>
                    <input className="form-control" placeholder="Enter your mail id" type="email" id="formFile" />
                </div>
                <hr className="hr" />

                <h5 className="my-0">Residential Address</h5>

                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label float-start">
                        State
                    </label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select your state</option>
                        <option value="1">Andhra Pradesh</option>
                        <option value="2">Telengana</option>
                        <option value="3">Karnataka</option>
                    </select>
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label float-start">
                        Disrtict
                    </label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select your disrtict</option>
                        <option value="1">East Godavari</option>
                        <option value="2">West Godavari</option>
                        <option value="3">Krishna</option>
                    </select>
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label float-start">
                        Mandal
                    </label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select your mandal</option>
                        <option value="1">Mandal 1</option>
                        <option value="2">Mandal 2</option>
                        <option value="3">Mandal 3</option>
                    </select>
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label float-start">
                        Area
                    </label>
                    <textarea className="form-control" placeholder="Type here.." id="exampleFormControlTextarea1" rows={3}></textarea>
                </div>
                <hr className="hr" />
                <h5 className="my-0">Bank Details</h5>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Account number
                    </label>
                    <input className="form-control" placeholder="Enter your bank acc number" type="number" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Ifsc
                    </label>
                    <input className="form-control" placeholder="Enter your bank ifsc code" type="text" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Bank Name
                    </label>
                    <input className="form-control" placeholder="Enter your bank name" type="text" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label float-start">
                        Account Type
                    </label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select your account type</option>
                        <option value="1">Type 1</option>
                        <option value="2">Type 2</option>
                        <option value="3">Type 3</option>
                    </select>
                </div>
                <hr className="hr mb-0" />
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        User Name
                    </label>
                    <input className="form-control" placeholder="Enter user name" type="text" id="formFile" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12 ">
                    <label htmlFor="formFile" className="form-label float-start">
                        Password
                    </label>
                    <input className="form-control" placeholder="Enter password" type="password" id="formFile" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EmployeeProfile
