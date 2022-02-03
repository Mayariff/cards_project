import {Dispatch} from "redux";
import {authAPI} from "../m3_DAL/API/api-common";
import {setAppErrorAC} from "./0n_App-reduser";


const initialState = {
    isRegistrated: false,
    isLoggedIn: false,
    emailIsBeSend: false,
    email: '',
    passwordСhanged: false
}
type InitialStateType = typeof initialState


const SET_IS_REGISTRATED = 'authReducer/SET_IS_REGISTRATED'
const SET_IS_LOGGED_IN = 'authReducer/SET-IS-LOGGED-IN'
const SET_EMAIL_PASSWORD_RECOVERY = 'authReducer/SENT-EMAIL-FOR-PASSWORD-RECOVERY'
const SET_NEW_PASSWORD = 'authReducer/SET-NEW-PASSWORD'



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

// thunks
export const RegistrateTC = (email:string, password:string ) => (dispatch: Dispatch<ActionsType>) => {
     authAPI.register(email, password)
         .then((res)=> dispatch(setIsRegistratedAC (true)))
         .catch((e)=> {
             let error  = e.response ? e.response.data.error :  (e.message + ', more details in the console');
             dispatch(setAppErrorAC(error))
         })
}
export const LoginInTC = (email: string, password: string, rememberMe: boolean)=>(dispatch: Dispatch<ActionsType>)=>{
authAPI.login(email, password, rememberMe)
    .then( ()=>dispatch(setIsLoginInAC(true)) )
    .catch((e)=> {
        let error  = e.response ? e.response.data.error :  (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
    })
}

export const setEmailForPasswordRecoveryTC = (email: string,emailFromWho?: string)=>(dispatch: Dispatch)=>{
    authAPI.forgotPassword(email,emailFromWho)
        .then((res)=>dispatch(setEmailForPasswordRecoveryAC(true, email) ))
        .catch((e)=> {
            let error  = e.response ? e.response.data.error :  (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
        })
}

export const setNewPasswordTC=(password: string, resetPasswordToken: string)=>(dispatch: Dispatch)=>{
  authAPI.recowerPassword(password, resetPasswordToken)
      .then(()=>{
          dispatch(setNewPasswordAC(true))
      })
      .catch((e)=> {
          let error  = e.response ? e.response.data.error :  (e.message + ', more details in the console');
          dispatch(setAppErrorAC(error))
      })
}


// types
type ActionsType = ReturnType<typeof setIsRegistratedAC>
    |ReturnType<typeof setIsLoginInAC>
    |ReturnType<typeof setAppErrorAC>
    |ReturnType <typeof  setEmailForPasswordRecoveryAC>
    |ReturnType <typeof setNewPasswordAC>