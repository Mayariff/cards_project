import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../1_main/m2_BLL/store";
import {Navigate} from "react-router-dom";
import {PATH} from "../../../1_main/m1-UI/routes/Routes";

const Profile = () => {
    const isLoggedIn= useSelector<AppRootStateType,boolean>(store=>store.login.isLoggedIn)
    if(!isLoggedIn){
        return <Navigate to={PATH.LOGIN_PAGE} />
    }
    return (
        <div>
            <h2>PROFILE PAGE</h2>
        </div>
    );
};

export default Profile;