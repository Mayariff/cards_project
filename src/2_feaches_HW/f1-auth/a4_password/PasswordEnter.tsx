import React, {ChangeEventHandler, useState} from 'react';
import {Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setNewPasswordTC} from "../../../1_main/m2_BLL/1n_Auth-reduser";
import {setAppErrorAC} from "../../../1_main/m2_BLL/0n_App-reduser";
import {AppRootStateType} from "../../../1_main/m2_BLL/store";

const PasswordEnter = () => {

    const {token}= useParams<string>()
    const dispatch = useDispatch()
    const passwordСhanged = useSelector<AppRootStateType,boolean>(store=>store.login.passwordСhanged)

    const [password,setPassword]= useState<string>('')
    const [password2,setPassword2]= useState<string>('')
    const onChangePasswordHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPassword(e.currentTarget.value)
    }
    const onChangePassword2Handler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPassword2(e.currentTarget.value)
    }

   const  onClickHandler:React.MouseEventHandler<HTMLButtonElement> =(e)=>{
       e.preventDefault()
       token? dispatch(setNewPasswordTC(password, token)): dispatch(setAppErrorAC('missing token'))
    }
    if (passwordСhanged){
        return <Navigate to={'/login'} />
    }
    return (
        <div>
            <h2>CREATE NEW PASSWORD</h2>
            <form>
                <label>
                    Password:
                    <input type={"password"} value={password} onChange={onChangePasswordHandler}/>
                </label>
                <label>
                    Confirm Password:
                    <input type={"password"} value={password2} onChange={onChangePassword2Handler}/>
                </label>
                <button  onClick={onClickHandler}>Register</button>
            </form>
            {token}
        </div>
    );
};

export default PasswordEnter;