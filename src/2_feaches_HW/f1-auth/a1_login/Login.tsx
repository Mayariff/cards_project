import React, {ChangeEventHandler, MouseEventHandler, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import {LoginInTC, LogoutTC} from "../../../1_main/m2_BLL/1n_Auth-reduser";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {RequestStatusType, setAppErrorAC} from "../../../1_main/m2_BLL/0n_App-reduser";
import {PATH} from "../../../1_main/m1-UI/routes/Routes";
import FormField from "../../../1_main/m1-UI/common/c9-FormField/FormField";
import SuperCheckbox from "../../../1_main/m1-UI/common/c3-SuperCheckbox/SuperCheckbox";
import Container from "../../../1_main/m1-UI/common/c8-Container/Container";
import ErrorMessage from "../../../1_main/m1-UI/common/c9-Error/ErrorMessage";
import SuperButton from "../../../1_main/m1-UI/common/c2-SuperButton/SuperButton";
import s from "../../../1_main/m1-UI/common/c8-Container/Container.module.css";




const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn= useSelector<AppRootStateType,boolean>(store=>store.login.isLoggedIn)
    const error= useSelector<AppRootStateType,string>(store => store.app.error)
    const status = useSelector<AppRootStateType, RequestStatusType>(store=> store.app.status)

    const navigate = useNavigate()
    const location =useLocation()
    // @ts-ignore
    const fromPage =  location.state?.from?.pathname

    const [email,setEmail]= useState<string>('')
    const [password,setPassword]= useState<string>('')
    const [checked,setChecked]= useState<boolean>(false)

    const onChangeEmailHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setEmail(e.currentTarget.value)
            dispatch(setAppErrorAC(''))
    }
    const onChangePasswordHandler:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPassword(e.currentTarget.value)
        dispatch(setAppErrorAC(''))
    }
    const checkBoxHandler:ChangeEventHandler<HTMLInputElement>  =(e)=>{
        setChecked(e.target.checked)
    }
    const onClickHandler:MouseEventHandler<HTMLButtonElement> = (e) =>{
        e.preventDefault()
        if(!isLoggedIn){
            dispatch(LoginInTC(email, password, checked))
        }else {dispatch(LogoutTC())}
    }



    useEffect(()=>{
        dispatch(setAppErrorAC(''))
        if(!isLoggedIn){
            return}
    },[dispatch, isLoggedIn])


   if(isLoggedIn && fromPage ){
        navigate(fromPage,{replace:true})
    }

    return (
        <Container title={'LOGIN PAGE'}>

            <form>
                <FormField fieldName={'Email'} value={email} onChangeHandler={onChangeEmailHandler} type={"email"}/>
                <FormField fieldName={'Password'} value={password} onChangeHandler={onChangePasswordHandler} type={"password"}/>
                <SuperCheckbox  checked={checked} onChange={checkBoxHandler}> Remember me </SuperCheckbox>
                <Link  to={PATH.FORGOT_PAGE}>Forgot Password</Link>
                {!isLoggedIn ?
                    <SuperButton nameButton={'Login'} type={'submit'} onClick={onClickHandler} disabled={status === 'loading'|| error!==''}/>:
                    <SuperButton nameButton={'Logout'} type={'submit'} onClick={onClickHandler}  disabled={status === 'loading'|| error!==''}/>
                }
            <div className={s.message}>Don't have an account?</div>
            <Link to={PATH.REGISTRATION_PAGE}>Sign up</Link>
            </form>
            {(error !=='') && <ErrorMessage error={error} />}
        </Container>
    );
};

export default Login;