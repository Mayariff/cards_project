import {Dispatch} from "redux";
import {authAPI} from "../m3_DAL/API/api-common";
import {setAppErrorAC} from "./0n_App-reduser";


const initialState = {
    isRegistrated: false,
    isLoggedIn: false,
    email: '',
    from: '' as string|undefined
}
type InitialStateType = typeof initialState


const SET_IS_REGISTRATED = 'authReducer/SET_IS_REGISTRATED'
const SET_IS_LOGGED_IN = 'authReducer/SET-IS-LOGGED-IN'
const SET_EMAIL_PASSWORD_RECOVERY = 'authReducer/SENT-EMAIL-FOR-PASSWORD-RECOVERY'



export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_REGISTRATED:{
            return {...state, isRegistrated: action.payload.isRegistrated }
        }
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        case SET_EMAIL_PASSWORD_RECOVERY:
            return {...state, email: action.payload.email , from: action.payload.from }
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
export const setEmailForPasswordRecoveryAC = ( email: string, from?:string) => ({type: SET_EMAIL_PASSWORD_RECOVERY, payload:{
        email, from
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
        .then(()=>dispatch(setEmailForPasswordRecoveryAC(email,emailFromWho) ))
        .catch((e)=> {
            let error  = e.response ? e.response.data.error :  (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
        })
}


// types
type ActionsType = ReturnType<typeof setIsRegistratedAC>
    |ReturnType<typeof setIsLoginInAC>
    |ReturnType<typeof setAppErrorAC>
    |ReturnType <typeof setEmailForPasswordRecoveryAC>