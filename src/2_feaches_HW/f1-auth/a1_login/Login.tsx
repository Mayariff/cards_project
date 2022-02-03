import React, {ChangeEventHandler, MouseEventHandler, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import {LoginInTC} from "../../../1_main/m2_BLL/1n_Auth-reduser";
import {Navigate, NavLink} from "react-router-dom";
import {setAppErrorAC} from "../../../1_main/m2_BLL/0n_App-reduser";
import {PATH} from "../../../1_main/m1-UI/routes/Routes";



const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn= useSelector<AppRootStateType,boolean>(store=>store.login.isLoggedIn)
    const error= useSelector<AppRootStateType,string>(store => store.app.error)

    const [email,setEmail]= useState<string>('')
    const [password,setPassword]= useState<string>('')
    const [rememberMe,setRememberMe]= useState<boolean>(false)

    const onChangeEmailHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setEmail(e.currentTarget.value)
        dispatch(setAppErrorAC(''))
    }
    const onChangePasswordHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPassword(e.currentTarget.value)
        dispatch(setAppErrorAC(''))

    }
    const checkBoxHandler:ChangeEventHandler<HTMLInputElement>  =(e)=>{
        setRememberMe(e.target.checked)
    }
    const onClickHandler:MouseEventHandler<HTMLButtonElement> = (e) =>{
        e.preventDefault()
        dispatch(LoginInTC(email, password, rememberMe))
    }

    useEffect(()=>{
        dispatch(setAppErrorAC(''))
        if(!isLoggedIn){
            return
        }

    },[])

  if(isLoggedIn){
      return <Navigate to={'/profile'} />
  }


    return (
        <div>
            <h2>LOGIN PAGE</h2>
            {error !=='' ? <div> {error} </div>:<div> </div>}
            <form>
                <label>
                    Email:
                    <input type={"email"} name={'email'} value={email} onChange={onChangeEmailHandler}/>
                </label>
                <label>
                    Password:
                    <input type={"password"} value={password} onChange={onChangePasswordHandler}/>
                </label>
                <label>
                    Password:
                    <input type={"checkbox"} value={'rememberMe'} onChange={checkBoxHandler}/>
                </label>
                <NavLink  to={PATH.FORGOT_PAGE}>Forgot Password</NavLink>
                <button type={'submit'} onClick={onClickHandler}>Register</button>
            </form>
            <div>Don't have an account?</div>
            <a href={'/registration'}>Sign up</a>
        </div>
    );
};

export default Login;