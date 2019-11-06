import React, { useEffect } from 'react';
import s from './Users.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {getUsers} from "../../Store/users";
import preloader from "../../preloader.gif";


let Users = (props) => {

    useEffect(() => {
       props.getUsers(props.pagesSize, props.currentPage);
    }, []);

    let changeCurrentPage = (page) => {
        props.getUsers(props.pagesSize, page)
    };


    let pagesCount = Math.ceil(props.totalCount / props.pagesSize);
    let range = [];
    for (let i = 1; i <= pagesCount; i++) {
        range.push(i);
    }
    return <div className={s.wrapper}>
        { props.isLoading ? <img src={preloader} alt=""/> : undefined }
        { range.map(page => <button onClick={
            () => changeCurrentPage(page)}
            className={props.currentPage === page &&
            s.currentPage}>{page}</button>) }

        { props.users.map(user => <div key={user.id}>
            <div>{user.name}</div>
            <div>{user.id}</div>
            <div><img src={user.photos.small ||
            'https://img.icons8.com/plasticine/2x/user.png'} alt=""/></div>
        </div>) }
    </div>
};

let mapStateToProps = state => ({
    users: state.users.users,
    totalCount: state.users.totalCount,
    pagesSize: state.users.pagesSize,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading,
});

export default compose(connect( mapStateToProps, { getUsers }))(Users);














