import {Dispatch} from "redux";
import {authAPI, UserType} from "../m3_DAL/API/api-common";
import {setAppErrorAC, setStatusAC} from "./0n_App-reduser";


const initialState = {
    isRegistrated: false,
    isLoggedIn: false,
    emailIsBeSend: false,
    email: '',
    passwordСhanged: false,
    isAuth: false,
    user: {} as UserType
}
type InitialStateType = typeof initialState


const SET_IS_REGISTRATED = 'authReducer/SET_IS_REGISTRATED'
const SET_IS_LOGGED_IN = 'authReducer/SET-IS-LOGGED-IN'
const SET_EMAIL_PASSWORD_RECOVERY = 'authReducer/SENT-EMAIL-FOR-PASSWORD-RECOVERY'
const SET_NEW_PASSWORD = 'authReducer/SET-NEW-PASSWORD'
const SET_USER_DATA = 'authReducer/SET-USER-DATA'



export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_REGISTRATED:{
            return {...state, isRegistrated: action.payload.isRegistrated }
        }
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        case SET_EMAIL_PASSWORD_RECOVERY:
            return {...state, emailIsBeSend: action.payload.emailIsBeSend, email: action.payload.email }

        case SET_NEW_PASSWORD:{
            return {...state, passwordСhanged: action.payload.passwordСhanged }
        }
        case SET_USER_DATA:{
        return {...state, user: action.payload.user}
        }
        default:
            return state
    }
}
// actions
export const setIsRegistratedAC = ( isRegistrated: boolean) => ({type: SET_IS_REGISTRATED, payload:{
        isRegistrated
    }} as const)
export const setIsLoginInAC = ( isLoggedIn: boolean) => ({type: SET_IS_LOGGED_IN, payload:{
        isLoggedIn
    }} as const)
export const setEmailForPasswordRecoveryAC = ( emailIsBeSend: boolean, email:string) => ({type: SET_EMAIL_PASSWORD_RECOVERY, payload:{
        emailIsBeSend, email
    }} as const)
export const setNewPasswordAC = (passwordСhanged: boolean) => ({type: SET_NEW_PASSWORD, payload:{
        passwordСhanged
    }} as const)
export const setAuthUserDataAC =(user: UserType)=>({type: SET_USER_DATA, payload:{user}} as const)

// thunks
export const RegistrateTC = (email:string, password:string ) => async (dispatch: Dispatch<ActionsType>) => {
    try{
        dispatch(setStatusAC('loading'))
        dispatch(setAppErrorAC(''))
         await  authAPI.register(email, password)
        dispatch(setIsRegistratedAC(true))
    }
    catch(e:any) {
        let error  = e.response ? e.response.data.error :  (e.message);
        dispatch(setAppErrorAC(error))
    }
    finally {
        dispatch(setStatusAC('idle'))
    }
}
export const LoginInTC = (email: string, password: string, rememberMe: boolean)=>async (dispatch: Dispatch<ActionsType>) =>{
    try{
        dispatch(setStatusAC('loading'))
        dispatch(setAppErrorAC(''))
        await authAPI.login(email, password, rememberMe)
        dispatch(setIsLoginInAC(true))
    }
    catch(e:any){
        let error  = e.response ? e.response.data.error :  (e.message);
        dispatch(setAppErrorAC(error))
    }
    finally {
        dispatch(setStatusAC('idle'))
    }
    }

export const LogoutTC=()=>async (dispatch: Dispatch<ActionsType>)=>{
    try{
        dispatch(setStatusAC('loading'))
        dispatch(setAppErrorAC(''))
        await  authAPI.delete()
        dispatch(setIsLoginInAC(false))
    }
    catch(e:any){
        let error  = e.response ? e.response.data.error :  (e.message);
        dispatch(setAppErrorAC(error))
    }
    finally {
        dispatch(setStatusAC('idle'))
    }
}

export const setEmailForPasswordRecoveryTC = (email: string,emailFromWho?: string)=> async (dispatch: Dispatch)=> {
    try {
        dispatch(setStatusAC('loading'))
        await authAPI.forgotPassword(email, emailFromWho)
        dispatch(setEmailForPasswordRecoveryAC(true, email))
    } catch (e: any) {
        let error = e.response ? e.response.data.error : (e.message);
        dispatch(setAppErrorAC(error))
    } finally {
        dispatch(setStatusAC('idle'))
    }
}

export const setNewPasswordTC=(password: string, resetPasswordToken: string)=>async (dispatch: Dispatch)=>{
    try {
        dispatch(setStatusAC('loading'))
        await  authAPI.recowerPassword(password, resetPasswordToken)
        dispatch(setNewPasswordAC(true))
    }catch (e: any) {
        let error = e.response ? e.response.data.error : (e.message);
        dispatch(setAppErrorAC(error))
    } finally {
        dispatch(setStatusAC('idle'))
    }
}



// types
type ActionsType = ReturnType<typeof setIsRegistratedAC>
    |ReturnType<typeof setIsLoginInAC>
    |ReturnType<typeof setAppErrorAC>
    |ReturnType <typeof  setEmailForPasswordRecoveryAC>
    |ReturnType <typeof setNewPasswordAC>
|ReturnType<typeof setStatusAC> | ReturnType<typeof setAuthUserDataAC>