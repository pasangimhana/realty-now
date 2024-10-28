import axiosInstance from "./apiConfigure"
import Cookies from "js-cookie"


export interface LoggedUserInfo {
    id: number
    username: string
    email: string
    role: string
}

export interface SpliToken {
    payload: string
    signature: string
}


export const isValidToken = async (): Promise<boolean> => {
    try {
        const response = await axiosInstance.get("auth/current-user")
        if (response.status == 200) {
            return true
        } else {
            // removeStoredToken()
            return false
        }
    } catch (error) {
        return false
    }

}

export const getLoggedUserInfo = async (): Promise<LoggedUserInfo | null> => {
    try {
        const response = await axiosInstance.get("auth/current-user")
        if (response.status == 200) {
            const loggedUserInfo: LoggedUserInfo = response.data
            return loggedUserInfo
        } else {
            // removeStoredToken()
            return null
        }
    } catch (error) {
        return null
    }
}

// split jwt token to two part to store in storage(for security purposes)
export const splitToken = (token: string): SpliToken => {
    const split_token = token.split('.')
    const token_payload = split_token[0] + '.' + split_token[1]
    const token_signature = split_token[2]
    return { payload: token_payload, signature: token_signature }
}

export const saveToken = (splitToken: SpliToken): boolean => {
    try {
        localStorage.setItem("token_payload", splitToken.payload);
        Cookies.set("token_signature", splitToken.signature)
        return true
    } catch {
        return false
    }
}

export const getStoredToken = (): string | null => {
    const token_payload = localStorage.getItem("token_payload") ? localStorage.getItem("token_payload") : ""
    const token_signature = Cookies.get("token_signature") ? Cookies.get("token_signature") : ""
    if (token_payload === "" || token_signature === "")
        return null

    const token = token_payload + '.' + token_signature
    return token
}

export const removeStoredToken = (): boolean => {
    try {
        localStorage.removeItem("token_payload")
        Cookies.remove("token_signature")
        return true
    } catch (error) {
        return false
    }
}


export const saveUserInfoLocalstorage = (userData: LoggedUserInfo): boolean => {
    try {
        localStorage.setItem("id", `${userData?.id}`)
        localStorage.setItem("username", userData?.username)
        localStorage.setItem("email", userData?.email)
        localStorage.setItem("role", userData?.role)
        return true
    } catch (error) {
        return false
    }
}

export const getSavedUserInfoFromLocalstorage = (): LoggedUserInfo | null => {
    try {
        return {
            id: Number(localStorage.getItem("id") ?? 0),
            username: localStorage.getItem("username") ?? "",
            email: localStorage.getItem("email") ?? "",
            role: localStorage.getItem("role") ?? ""
        }
    } catch (error) {
        return null
    }
}