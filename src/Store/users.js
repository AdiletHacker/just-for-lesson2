import {API} from "./DAL";
const ADD_USERS = 'ADD_USERS';
const ADD_TOTAL_COUNT = 'ADD_TOTAL_COUNT';
const ADD_CURRENT_PAGE = 'ADD_CURRENT_PAGE';
const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING';


const initialState = {
    users: [],
    totalCount: null,
    pagesSize: 70,
    currentPage: 1,
    isLoading: false
};

export let users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: action.users
            };
        case ADD_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            };
        case ADD_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case CHANGE_IS_LOADING:
            return {
                ...state,
                isLoading: action.boo
            };
        default: return state;
    }
};

let addUsers = (users) => ({ type: ADD_USERS, users });
let addTotalCount = (count) => ({ type: ADD_TOTAL_COUNT, count });
let addCurrentPage = (currentPage) => ({ type: ADD_CURRENT_PAGE, currentPage });
let changeIsLoading = (boo) => ({ type: CHANGE_IS_LOADING, boo });

export let getUsers = (pageSize, currentPage) => dispatch => {
    dispatch(changeIsLoading(true));
    API.getUsers(pageSize, currentPage).then(response => {
        dispatch(changeIsLoading(false));
        dispatch(addUsers(response.data.items));
        dispatch(addTotalCount(response.data.totalCount));
        dispatch(addCurrentPage(currentPage));
    });
};

























