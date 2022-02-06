import React from 'react';
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import {useSelector} from "react-redux";
import Container from "../../../1_main/m1-UI/common/c8-Container/Container";
import s from "../../../1_main/m1-UI/common/c8-Container/Container.module.css";
import emailIMG from '../../../assets/image/email.png'
import f from './CheckEmail.module.css'


const CheckEmail = () => {
    const email = useSelector<AppRootStateType,string>(store => store.login.email)
    return (
        <Container title={'Check Email'}>
            <img src={emailIMG} alt={'Success'} className={f.img} />
            <span className={s.message}>We've sent an Email with instructions to {email}</span>
        </Container>
    );
};

export default CheckEmail;