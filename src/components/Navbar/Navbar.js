import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



let Navbar = (props) => {
    return <div className={s.wrapper}>

        <NavLink to='/profile' activeClassName={s.activeLink}>Профиль</NavLink>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Сообщения</NavLink>
        <NavLink to='/users' activeClassName={s.activeLink}>Пользователи</NavLink>
        <NavLink to='/login' activeClassName={s.activeLink}>Логин</NavLink>

    </div>
};

export default Navbar;















