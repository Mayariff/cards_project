import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from "../routes/Routes";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import s from './Header.module.css'

const Header = () => {
    const [checked , setChecked] =useState<boolean>(false)
    const onChangeChecked = (checked:boolean) =>setChecked(checked)

    return (
        <div className={s.wrapper}>
            <SuperCheckbox id='check-menu' onChangeChecked={onChangeChecked} />
            <nav className={checked? `${s.mainMenu} ${s.mainMenuChecked}` :s.mainMenu}>
                <NavLink to={PATH.TEST_PAGE} className={s.item}> test |</NavLink>
                <NavLink to={PATH.LOGIN_PAGE} className={s.item}> login | </NavLink>
                <NavLink to={PATH.REGISTRATION_PAGE} className={s.item}> registration | </NavLink>
                <NavLink to={PATH.PROFILE_PAGE} className={s.item}> profile | </NavLink>
                <NavLink to={PATH.ERROR404_PAGE} className={s.item}>  error404 </NavLink>
            </nav>
        </div>
    );
};

export default Header;