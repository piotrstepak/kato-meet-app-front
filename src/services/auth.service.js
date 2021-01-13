import axios from "axios";

const AUTH_API_URL = 'http://localhost:3001/auth/';

//rewrite to async/await

const register = (name, age, email, password) => {
    return axios.post(`${AUTH_API_URL}register`, {
        name,
        age,
        email,
        password,
    });
}

//add catch with err
const login = (email, password) => {
    return axios
        .post(`${AUTH_API_URL}login`, {
            email,
            password,
        })
        .then((res) => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data.accessToken));
                console.log(res.data)//helper print

            } else {
                console.log('DUPA')
            }

            return res.data.user;
        });
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
