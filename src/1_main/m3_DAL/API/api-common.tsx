import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    //baseURL: 'http://localhost:7542/',
    withCredentials: true,
})

// api

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<{ email: string, password: string, rememberMe: boolean }, AxiosResponse<ResponseType<UserType>>>('2.0/auth/login', {
            email,
            password,
            rememberMe
        })
    },
    register(email: string, password: string) {
        return instance.post<{ email: string, password: string }, AxiosResponse<ResponseType<UserType>>>('2.0/auth/register', {
            email,
            password
        })
    },
    me() {
        return instance.post<ResponseType<UserType>>('2.0/auth/me')
    },
    addPersonalData(name: string, avatar: string) {
        return instance.put<{ name: string, avatar: string }, AxiosResponse<ResponseType<UserType>>>('2.0/auth/me', {
            name,
            avatar
        })
    },
    delete() {
        return instance.delete<ResponseType<{ info: string }>>('2.0/auth/me')
    },
    forgotPassword(emailUser: string, emailFromWho?: string) {
        //вместо локал в message добавить нашу gt-page и на стр на которой восстановление пароля
        const message: string = `<div style="background-color: lime; padding: 15px"> password recovery link: <a href='https://mayariff.github.io/cards_project/#/set-new-password/$token$'> link</a></div>`
        return instance.post<{ email: string, message: string, from?: string }, AxiosResponse<ResponseType<{ info: string }>>>('2.0/auth/forgot', {
            email: emailUser,
            message,
            from: emailFromWho
        })
    },
    recowerPassword(password: string, token: string) {
        return instance.post<{ password: string, token: string }, AxiosResponse<ResponseType<{ info: string }>>>('2.0/auth/set-new-password', {
            password,
            token
        })
    }

}

export type ResponseType<T = {}> = {
    data: T
    error?: string
}

export type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
}

