import axios from "axios"
import configData from "./../config/config.json"

export function signIn(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servLogin/logintoken",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: { data },
    })
}

export function signUpForEmployer(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servEmployer/regEmployer",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data
    })
}

export function checkAvailabilityOfUsername(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servEmployer/checkAvailability",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: { data },
    })
}

export function forgotPassword(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servLogin/forgotpwd",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: { data },
    })
}

export function changePassword(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servLogin/changePwd",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-logintoken": "",
            "x-user-name": ""
        },
        data: { data },
    })
}

export function otpGenerationForgotPwd(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servLogin/otp",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: { data },
    })
}

export function otpGenerationSignUp(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servLogin/otp",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: { data },
    })
}

export function getEmployerProfile(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servEmployer/profileEmployer?userName=cheran1200",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-logintoken": "",
            "x-user-name": ""
        },
        data: { data },
    })
}

export function updateEmployerProfile(data: any) {
    return axios({
        url: configData.SERVER_URL + "/api/v1/servEmployer/profileEmployer",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-logintoken": "",
            "x-user-name": ""
        },
        data: { data },
    })
}