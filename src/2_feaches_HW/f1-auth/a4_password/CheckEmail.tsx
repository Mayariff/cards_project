import React from 'react';
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import {useSelector} from "react-redux";



const CheckEmail = () => {
    const email = useSelector<AppRootStateType,string>(store => store.login.email)
    return (
        <div>
            <h2>Check Email</h2>
            <span>We've sent an Email with instructions to {email}</span>
        </div>
    );
};

export default CheckEmail;