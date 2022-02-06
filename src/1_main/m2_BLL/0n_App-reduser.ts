import {Dispatch} from "redux";
import {authAPI} from "../m3_DAL/API/api-common";
import {setIsLoginInAC} from "./1n_Auth-reduser";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    error: '' as string,
    isInitialized: false,
    status: 'idle' as RequestStatusType
}
type InitialStateType = typeof initialState


const SET_IS_ERROR = 'appReducer/SET_IS_ERROR'
const SET_IS_INITIALIZED = 'appReducer/SET_IS_INITIALIZED'
const SET_STATUS = 'appReducer/SET_STATUS'


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        case SET_IS_INITIALIZED: {
            return {...state, isInitialized: action.payload.isInitialized}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default:
            return state
    }
}
// actions
export const setAppErrorAC = (error: string) => ({
    type: SET_IS_ERROR, payload: {
        error
    }
} as const)
export const setIsInitializedAC = (isInitialized: boolean) => ({
    type: SET_IS_INITIALIZED,
    payload: {isInitialized}
} as const)
export const setStatusAC = (status: RequestStatusType) => ({type: SET_STATUS, payload: {status}} as const)

// types
type ActionsType =
    ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setStatusAC>

// thunks
export const initializeAppTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setStatusAC('loading'))
        dispatch(setAppErrorAC(''))
        await authAPI.me()
        dispatch(setIsLoginInAC(true))
    } catch (e: any) {
        let error = e.response ? e.response.data.error : (e.message + ', more details in the console');
        dispatch(setAppErrorAC(error))
    } finally {
        dispatch(setStatusAC('idle'))
        dispatch(setIsInitializedAC(true))
    }
}