import {API} from "./DAL";

const ADD_USER_DATA = 'ADD_USER_DATA';


const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
};

export let auth = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        default: return state;
    }
};

let addUserData = (email, id, login, isAuth) => ({ type: ADD_USER_DATA, data: { email, id, login, isAuth } });

export let getLogin = () => (dispatch) => {
    API.getLogin().then(response => {
        if (response.resultCode === 0) {
            const { email, id, login } = response.data;
            dispatch(addUserData(email, id, login, true));
        }
    });
};

export let login = (email, password, rememberMe) => (dispatch) => {
    API.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getLogin());
        }
    });
};

export let logout = () => (dispatch) => {
    API.logout().then(() => {
        dispatch(addUserData(null, null, null, false));
    });
};




























