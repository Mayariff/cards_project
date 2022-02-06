import React, {ChangeEventHandler, useState} from 'react';
import {PATH} from "../../../1_main/m1-UI/routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {setEmailForPasswordRecoveryTC} from "../../../1_main/m2_BLL/1n_Auth-reduser";
import {Link, Navigate} from "react-router-dom";
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import FormField from "../../../1_main/m1-UI/common/c9-FormField/FormField";
import Container from "../../../1_main/m1-UI/common/c8-Container/Container";
import SuperButton from "../../../1_main/m1-UI/common/c2-SuperButton/SuperButton";
import s from "../../../1_main/m1-UI/common/c8-Container/Container.module.css";
import ErrorMessage from "../../../1_main/m1-UI/common/c9-Error/ErrorMessage";
import {RequestStatusType, setAppErrorAC} from "../../../1_main/m2_BLL/0n_App-reduser";

const PasswordRecovery = () => {
    const dispatch = useDispatch()
    const emailIsBeSended = useSelector<AppRootStateType,boolean>(store => store.login.emailIsBeSend)
    const error= useSelector<AppRootStateType,string>(store => store.app.error)
    const status = useSelector<AppRootStateType, RequestStatusType>(store=> store.app.status)

    const [email,setEmail]= useState<string>('')
    const onChangeEmailHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setEmail(e.currentTarget.value)
        dispatch(setAppErrorAC(''))
    }
    const onClickHandler=()=>{
        dispatch(setEmailForPasswordRecoveryTC(email, 'maya-mno@yandex.ru'))

    }
    if(emailIsBeSended){
        return <Navigate to= {PATH.CHECK_EMAIL_PAGE} />
    }

    return (
        <Container title={'Forgot your Password?'}>
            <form>
                <FormField fieldName={'Email'} value={email} onChangeHandler={onChangeEmailHandler} type={"email"}/>
            <span className={s.message}>Enter your email address and we will send you future instructions</span>
            <SuperButton nameButton={'Send instructions'} onClick={onClickHandler} disabled={status === 'loading'} />
            <span className={s.message}>Did your remember your password?</span>
            <Link to={PATH.LOGIN_PAGE}>Try to logging in</Link>
            </form>
            {(error !=='') && <ErrorMessage error={error} />}
        </Container>
    );
};

export default PasswordRecovery;