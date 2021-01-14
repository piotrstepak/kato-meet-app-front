import data from '../data.json';
import axios from "axios";

const USERS_API_URL = 'http://localhost:3001/users/';
const REGISTER_API_URL = 'http://localhost:3001/auth/register/';

const clearDB = async () => {
    const res = await fetch(USERS_API_URL);
    const currentDB = await res.json();
    currentDB.map(user => {
        console.log(user)//helper print
        axios.delete(`${USERS_API_URL}${user._id}`)
    })
}

const fillDB = async () => {
    // const response = await fetch(data);
    // const dataToFillDB = await response.json();
    const dataToFillDB = [...data];
    console.log(dataToFillDB)
    dataToFillDB.map(user => {
        console.log(user)//helper print
        return axios.post(REGISTER_API_URL, {
            name: user.name,
            age: user.age,
            email: user.email,
            password: user.password,
            // likedUsers: user.likedUsers,
            // dislikedUsers: user.dislikedUsers,
            // likedBy: user.likedBy,
            image: user.image,
        })
    })
}

export default {
    clearDB,
    fillDB,
}
