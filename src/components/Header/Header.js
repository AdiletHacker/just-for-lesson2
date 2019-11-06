import React from 'react';
import s from './Header.module.css';
import {connect} from "react-redux";
import {logout} from "../../Store/auth";


let Header = (props) => {
    return <div className={s.wrapper}>

        { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> : <div>Login</div> }

    </div>
};


let mapStateToProps = state => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {logout})(Header);















