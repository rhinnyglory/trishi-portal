export const gstinFormat = `The example of a GSTIN would go like this: 22AAAAA0000A1Z5, where 22 is the state code, which is Chattisgarh, AAAAA0000A is the PAN or the Personal Account Number, 1 is the entity number of the same PAN holder in a state, "Z" is the default alphabet and 5 is the checksum digit. A typical PAN is AFZPK7190K. Fourth character of PAN i.e. "P" in the above PAN represents the status of the PAN holder. "P" stands for Individual, "F" stands for Firm, "C" stands for Company, "H" stands for HUF, "A" stands for AOP, "T" stands for TRUST etc.`

export const APIMsgType = {
    Success: 1,
    Error: 2,
    Warning: 3,
    Normal: 4
}

export const employeeUserMenu = [
    { employeeMenuName: "Profile", employeeRoute: "/profile", employeeId: 1 },
    { employeeMenuName: "Employee Profile", employeeRoute: "/employeeprofile", employeeId: 2 },
    { employeeMenuName: "Opportunities", employeeRoute: "/opportunities", employeeId: 3 },
    { employeeMenuName: "Posted Opportunities", employeeRoute: "/postedopportunities", employeeId: 4 }
]

export const employeeSideMenu = [
    { employeeSideMenuName: "Employee registration", employeeSideMenuRoute: "/employeeregistration", employeeSideMenuId: 1 },
    { employeeSideMenuName: "Staff management", employeeSideMenuRoute: "/staffmanagement", employeeSideMenuId: 2 },
    { employeeSideMenuName: "Data access", employeeSideMenuRoute: "/dataaccess", employeeSideMenuId: 3 },
    { employeeSideMenuName: "Attendance & Salary", employeeSideMenuRoute: "/attendance&salary", employeeSideMenuId: 4 },
    { employeeSideMenuName: "Wallet & Ledger", employeeSideMenuRoute: "/wallet&ledger", employeeSideMenuId: 5 }
]

export type FormValues = {
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
    userPwd: string
    confirmPassword: string
    otpValue: string
}

export type EmployeeFormValues = {
    aadharCardPic: object
    aadharNumber: string
    name: string
    pan: string
    mobile: string
    email: string
    pin: string
    area: string
    state: string
    district: string
    mandal: string
    accountNum: string
    ifsc: string
    gstin: string
    bankName: string
    accountType: string
    userName: string
    userPwd: string
    confirmPassword: string
    otpValue: string
}