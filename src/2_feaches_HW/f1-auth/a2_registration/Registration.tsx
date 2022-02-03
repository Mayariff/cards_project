import React, {ChangeEventHandler, MouseEventHandler, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RegistrateTC} from "../../../1_main/m2_BLL/1n_Auth-reduser";
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import {Navigate} from "react-router-dom";
import {setAppErrorAC} from "../../../1_main/m2_BLL/0n_App-reduser";

const Registration = () => {

    const dispatch = useDispatch()
    const isRegistrated= useSelector<AppRootStateType,boolean>(store=>store.login.isRegistrated)
    const error= useSelector<AppRootStateType,string>(store => store.app.error)

    const [email,setEmail]= useState<string>('')
    const [password,setPassword]= useState<string>('')
    const [password2,setPassword2]= useState<string>('')

    const onChangeEmailHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setEmail(e.currentTarget.value)
    }
   const onChangePasswordHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
       setPassword(e.currentTarget.value)
   }
    const onChangePassword2Handler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPassword2(e.currentTarget.value)
    }
   const onClickHandler:MouseEventHandler<HTMLButtonElement> = (e)=>{
       e.preventDefault()
       dispatch(RegistrateTC(email, password))

   }
    useEffect(()=>{
        dispatch(setAppErrorAC(''))
        if(!isRegistrated){
            return
        }
    },[])

   if (isRegistrated){
        return <Navigate to={'/login'} />
    }

    return (
        <div id={'registration'}>
            <h2>REGISTRATION PAGE</h2>
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
                    Confirm Password:
                    <input type={"password"} value={password2} onChange={onChangePassword2Handler}/>
                </label>
                <button type={'submit'} onClick={onClickHandler}>Register</button>
            </form>
        </div>
    );
};

export default Registration;