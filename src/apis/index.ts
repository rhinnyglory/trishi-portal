import axios from "axios"
import configData from "./../config/config.json"

export function signIn(data: any) {
    return axios({
        url: configData.SERVER_URL + "/posts",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: { data },
    })
}

export function signUp(data: any) {
    return axios({
        url: configData.SERVER_URL + "/posts",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: { data },
    })
}
