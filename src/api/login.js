import {
    get,
    post
} from "@/api/request"

const Url = {
    login: "/login",
    loginout: "/loginout"
}


export function login(data) {
    return post(Url.login, data)
}

export function loginout(data) {
    return post(Url.loginout, data)
}