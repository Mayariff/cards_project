import Test from "../../../2_feaches_HW/f0-test/test";
import Login from "../../../2_feaches_HW/f1-auth/a1_login/Login";
import Error404 from "../../../2_feaches_HW/f1-auth/a4_error404/Error404";
import React from "react";
import {Route, Routes} from 'react-router-dom'
import Profile from "../../../2_feaches_HW/f1-auth/a3_profile/Profile";
import Registration from "../../../2_feaches_HW/f1-auth/a2_registration/Registration";
import PasswordRecovery from "../../../2_feaches_HW/f1-auth/a4_password/PasswordRecovery";
import PasswordEnter from "../../../2_feaches_HW/f1-auth/a4_password/PasswordEnter";
import CheckEmail from "../../../2_feaches_HW/f1-auth/a4_password/CheckEmail";

export const PATH = {
    START_PAGE: '/*',
    TEST_PAGE: '/test',
    LOGIN_PAGE: '/login/*',
    ERROR404_PAGE: '/error404',
    PROFILE_PAGE: '/profile',
    REGISTRATION_PAGE: '/registration',
    FORGOT_PAGE:'/forgot_password',
    CREATE_NEW_PASSWORD_PAGE: '/set-new-password/:token',
    CHECK_EMAIL_PAGE: '/check_email'
}

function Routing() {
    return (
        <div>
            <Routes>
                <Route path={PATH.START_PAGE} element={<Test/>}/>
                <Route path={PATH.TEST_PAGE} element={<Test/>}/>
                <Route path={PATH.LOGIN_PAGE} element={<Login/>} />
                <Route path={PATH.REGISTRATION_PAGE} element={<Registration/>}/>
                <Route path={PATH.PROFILE_PAGE} element={<Profile />}/>
                <Route path={PATH.ERROR404_PAGE} element={<Error404/>}/>
                <Route path={PATH.FORGOT_PAGE} element={<PasswordRecovery />}/>
                <Route path={PATH.CREATE_NEW_PASSWORD_PAGE} element={<PasswordEnter />}/>
                <Route path={PATH.CHECK_EMAIL_PAGE} element={<CheckEmail />}/>
            </Routes>
        </div>
    )
}

export default Routing
