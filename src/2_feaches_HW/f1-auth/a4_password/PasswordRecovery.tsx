import React, {ChangeEventHandler, useState} from 'react';
import {PATH} from "../../../1_main/m1-UI/routes/Routes";
import {useDispatch} from "react-redux";
import {setEmailForPasswordRecoveryTC} from "../../../1_main/m2_BLL/1n_Auth-reduser";

const PasswordRecovery = () => {
    const dispatch = useDispatch()
    const [email,setEmail]= useState<string>('')
    const onChangeEmailHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setEmail(e.currentTarget.value)
    }
    const onClickHandler=()=>{
        dispatch(setEmailForPasswordRecoveryTC(email, 'maya-mno@yandex.ru'))
    }

    return (
        <div>
            <h2>Forgot your Password?</h2>
            <form>
                <label>
                Email:
                <input type={"email"} name={'email'} value={email} onChange={onChangeEmailHandler}/>
            </label>
            </form>
            <span>Enter your email address and we will send you future instructions</span>
            <button onClick={onClickHandler}>Send instructions</button>
            <span>Did your remember your password?</span>
            <a href={PATH.LOGIN_PAGE}>Try to logging in</a>
        </div>
    );
};

export default PasswordRecovery;