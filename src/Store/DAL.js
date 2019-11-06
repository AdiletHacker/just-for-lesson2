import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '9936799b-ed7b-411e-8521-23b1ed72b8a0' },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

export const API = {
    getUsers(pageSize = 50, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`);
    },
    getLogin() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    login(email, pass, rememberMe = false) {
        return instance.post(`auth/login`, { email, pass, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};



















