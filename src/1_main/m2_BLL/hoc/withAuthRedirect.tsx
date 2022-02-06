import {AppRootStateType} from "../store";
import {useSelector} from "react-redux";
import {PATH} from "../../m1-UI/routes/Routes";
import {Navigate, useLocation} from "react-router-dom";



export function withAuthRedirect<T>(Component: React.ComponentType<T>) {

    const RedirectComponent =({...restProps})=>{
       const location= useLocation()
       const isLoggedIn= useSelector<AppRootStateType,boolean>(store=>store.login.isLoggedIn)

        if (!isLoggedIn) return <Navigate to= {PATH.LOGIN_PAGE} state={{from:location}} />
        return <Component {...restProps as T}/>
    }
    return RedirectComponent;
}