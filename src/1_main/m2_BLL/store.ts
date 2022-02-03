import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./1n_Auth-reduser";
import {appReducer} from "./0n_App-reduser";

const rootReducer = combineReducers({
    login: authReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;