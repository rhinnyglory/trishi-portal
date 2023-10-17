import React from "react"

import "./Profile.css"

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

const Profile = (props: any) => {
    return (
        <div className="container mt-3">
            <h3>Profile Edit</h3>
            <form className="row g-3">
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="First name *" aria-label="First name" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Middle name" aria-label="Middle name" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Last name *" aria-label="Last name" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Email *" aria-label="Email" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Mobile number *" aria-label="Mobile number" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Address Line 1 *" aria-label="Address Line 1" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Address Line 2 *" aria-label="ddress Line 2" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Address Line 3 *" aria-label="ddress Line 3" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Company name *" aria-label="Company name" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="GSTIN *" aria-label="GSTIN" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Pin Code *" aria-label="Pin Code" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="Location *" aria-label="Location" />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-6 col-12">
                    <input type="text" className="form-control" placeholder="User Name" aria-label="User Name" />
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

export default Profile
