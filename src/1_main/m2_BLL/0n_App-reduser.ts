const initialState = {
    error: ''
}
type InitialStateType = typeof initialState


const SET_IS_ERROR = 'appReducer/SET_IS_ERROR'



export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_ERROR: {
            return {...state,
                 error: action.payload.error}
        }
        default:
            return state
    }
}
// actions
export const setAppErrorAC = (error:string) => ({type: SET_IS_ERROR, payload:{
        error
    }} as const)

// types
type ActionsType = ReturnType<typeof setAppErrorAC>