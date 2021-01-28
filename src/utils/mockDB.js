import data from '../data.json';
import axios from "axios";

const USERS_API_URL = 'http://localhost:3001/users/';
const REGISTER_MOCK_API_URL = 'http://localhost:3001/auth/registerMock/';

const clearDB = async () => {
    const res = await fetch(USERS_API_URL);
    const currentDB = await res.json();
    currentDB.map(user => {
        console.log(user)//helper print
        return axios.delete(`${USERS_API_URL}${user._id}`)
    })
}

const fillDB = async () => {
    const dataToFillDB = [...data];
    console.log(dataToFillDB)
    dataToFillDB.map(user => {
        console.log(user)//helper print
        return axios.post(REGISTER_MOCK_API_URL, {
            name: user.name,
            age: user.age,
            email: user.email,
            password: user.password,
            description: user.description,
            // likedUsers: user.likedUsers,
            // dislikedUsers: user.dislikedUsers,
            // likedBy: user.likedBy,
            images: user.images,
            sex: user.sex,
        })
    })
}

export default {
    clearDB,
    fillDB,
}
