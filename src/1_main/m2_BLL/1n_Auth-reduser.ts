import {Dispatch} from "redux";

const initialState = {}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}
// actions
export const SomeAC = () =>
    ({type: 'login/SET-IS-LOGGED-IN'} as const)

// thunks
export const SomeTC = (data: any) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(SomeAC())
}

// types
type ActionsType = ReturnType<typeof SomeAC>