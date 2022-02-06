import React, {ChangeEventHandler, MouseEventHandler, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RegistrateTC} from "../../../1_main/m2_BLL/1n_Auth-reduser";
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import {Navigate} from "react-router-dom";
import {RequestStatusType, setAppErrorAC} from "../../../1_main/m2_BLL/0n_App-reduser";
import FormField from "../../../1_main/m1-UI/common/c9-FormField/FormField";
import SuperButton from "../../../1_main/m1-UI/common/c2-SuperButton/SuperButton";
import Container from "../../../1_main/m1-UI/common/c8-Container/Container";
import ErrorMessage from "../../../1_main/m1-UI/common/c9-Error/ErrorMessage";
import {PATH} from "../../../1_main/m1-UI/routes/Routes";


const Registration = () => {
    const dispatch = useDispatch()
    const isRegistrated= useSelector<AppRootStateType,boolean>(store=>store.login.isRegistrated)
    const error= useSelector<AppRootStateType,string>(store => store.app.error)
    const status = useSelector<AppRootStateType, RequestStatusType>(store=> store.app.status)

    const [email,setEmail]= useState<string>('')
    const [password,setPassword]= useState<string>('')
    const [password2,setPassword2]= useState<string>('')

    const onChangeEmailHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setEmail(e.currentTarget.value)
        dispatch(setAppErrorAC(''))
    }
   const onChangePasswordHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
       setPassword(e.currentTarget.value)
       dispatch(setAppErrorAC(''))
   }
    const onChangePassword2Handler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPassword2(e.currentTarget.value)
        dispatch(setAppErrorAC(''))
    }
   const onClickHandler:MouseEventHandler<HTMLButtonElement> = (e)=>{
       e.preventDefault()
       if (password===password2) {
       dispatch(RegistrateTC(email, password))
       dispatch(setAppErrorAC(''))
       }else {
           dispatch(setAppErrorAC('Passwords is different'))
       }
   }
    useEffect(()=>{
        dispatch(setAppErrorAC(''))
        if(!isRegistrated){
            return
        }
    },[dispatch,isRegistrated])



   if (isRegistrated){
        return <Navigate to={PATH.LOGIN_PAGE} />
    }

    return (
        <Container title={'REGISTRATION PAGE'} >
                <form>
                    <FormField fieldName={'Email'} value={email} onChangeHandler={onChangeEmailHandler} type={"email"} />
                    <FormField fieldName={'Password'} value={password} onChangeHandler={onChangePasswordHandler}
                               type={"password"}/>
                    <FormField fieldName={'Confirm Password'} value={password2}
                               onChangeHandler={onChangePassword2Handler} type={"password"}/>
                    <SuperButton type={'submit'} onClick={onClickHandler} nameButton={'Register'} disabled={status === 'loading' || error!==''}/>
                </form>

           {(error !=='') && <ErrorMessage error={error} />}
        </Container>
    );
};
export default Registration;