import React, {ChangeEventHandler, useState} from 'react';
import {Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setNewPasswordTC} from "../../../1_main/m2_BLL/1n_Auth-reduser";
import {RequestStatusType, setAppErrorAC} from "../../../1_main/m2_BLL/0n_App-reduser";
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import ErrorMessage from "../../../1_main/m1-UI/common/c9-Error/ErrorMessage";
import Container from "../../../1_main/m1-UI/common/c8-Container/Container";
import FormField from "../../../1_main/m1-UI/common/c9-FormField/FormField";
import SuperButton from "../../../1_main/m1-UI/common/c2-SuperButton/SuperButton";
import {PATH} from "../../../1_main/m1-UI/routes/Routes";

const PasswordEnter = () => {

    const {token}= useParams<string>()
    const dispatch = useDispatch()
    const passwordСhanged = useSelector<AppRootStateType,boolean>(store=>store.login.passwordСhanged)
    const error= useSelector<AppRootStateType,string>(store => store.app.error)
    const status = useSelector<AppRootStateType, RequestStatusType>(store=> store.app.status)

    const [password,setPassword]= useState<string>('')
    const [password2,setPassword2]= useState<string>('')
    const onChangePasswordHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPassword(e.currentTarget.value)
        dispatch(setAppErrorAC(''))
    }
    const onChangePassword2Handler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPassword2(e.currentTarget.value)
        dispatch(setAppErrorAC(''))
    }

   const  onClickHandler:React.MouseEventHandler<HTMLButtonElement> =(e)=>{
       e.preventDefault()
       if (password===password2) {
           token ? dispatch(setNewPasswordTC(password, token)) : dispatch(setAppErrorAC('missing token'))
       }else {
           dispatch(setAppErrorAC('Passwords is different'))
       }
    }
    if (passwordСhanged){
        return <Navigate to={PATH.LOGIN_PAGE} />
    }
    return (
        <Container  title={'CREATE NEW PASSWORD'}>
            <form>
                <FormField fieldName={'Password'} value={password} onChangeHandler={onChangePasswordHandler}
                           type={"password"}/>
                <FormField fieldName={'Confirm Password'} value={password2} onChangeHandler={onChangePassword2Handler}
                           type={"password"}/>

                <SuperButton  nameButton={'Register'} onClick={onClickHandler} disabled={status === 'loading' || error!==''}/>
            </form>
            {(error !=='') && <ErrorMessage error={error} />}
        </Container>
    );
};

export default PasswordEnter;