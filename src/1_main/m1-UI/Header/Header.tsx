import React, {MouseEventHandler, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from "../routes/Routes";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import s from './Header.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2_BLL/store";
import {RequestStatusType} from "../../m2_BLL/0n_App-reduser";

const Header = () => {
    const [checked , setChecked] =useState<boolean>(false)
    const onChangeChecked = (checked:boolean) =>setChecked(checked)
    const status = useSelector<AppRootStateType, RequestStatusType>(store=> store.app.status)
    const onClickHandler:MouseEventHandler<HTMLAnchorElement> =(e)=>{
        status ==='loading' && e.preventDefault()
    }

    return (
        <div className={s.wrapper}>
            <SuperCheckbox id='check-menu' onChangeChecked={onChangeChecked} />
            <nav className={checked? `${s.mainMenu} ${s.mainMenuChecked}` :s.mainMenu}  >
                <NavLink to={PATH.TEST_PAGE} className={s.item} onClick={onClickHandler}> test |</NavLink>
                <NavLink to={PATH.LOGIN_PAGE} className={s.item} onClick={onClickHandler}> login | </NavLink>
                <NavLink to={PATH.REGISTRATION_PAGE} className={s.item} onClick={onClickHandler}> registration | </NavLink>
                <NavLink to={PATH.PROFILE_PAGE} className={s.item} onClick={onClickHandler}> profile | </NavLink>
                <NavLink to={PATH.ERROR404_PAGE} className={s.item} onClick={onClickHandler}>  error404 </NavLink>
            </nav>
        </div>
    );
};

export default Header;