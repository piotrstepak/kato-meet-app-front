import React, {useState} from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import UndoRoundedIcon from "@material-ui/icons/UndoRounded";
import { Link } from "react-router-dom";
import '../LoginCard/LoginCard.css';

function MyProfile() {
    let loggedUser = useSelector(state => state.loginLogout.user);//consider store with hooks
    const UPDATE_USER_API = `http://localhost:3001/users/update/${loggedUser._id}`;

    const [email, setEmail] = useState(loggedUser.email);//all register data to one object ?
    const [password, setPassword] = useState(loggedUser.password);
    const [name, setName] = useState(loggedUser.name);
    const [age, setAge] = useState(loggedUser.age);

    const handleUpdateSubmit = e => {
        e.preventDefault();
        const updatedLoggedUser = {
            name: name,
            age: age,
            email: email,
            likedUsers: loggedUser.likedUsers,
            dislikedUsers: loggedUser.dislikedUsers,
            likedBy: loggedUser.likedBy
        }
        axios.put(UPDATE_USER_API, updatedLoggedUser)
            .then(res => {
                console.log(res.data)
                alert(`Użytkownik ${name} został pomyślnie zaktualizowany`)
            })
            // .catch(err => res.status(400).json(`Error: ${err}`))
        loggedUser.name = name;
    }

    const handleAgeChange = event => {
        setAge(event.target.value)
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleEmailChange = event => (
        setEmail(event.target.value)
    )

    const handlePasswordChange = event => (
        setPassword(event.target.value)
    )

    return (
        //className do wymiany
        <div className='loginCard'>
            <img src={loggedUser.image} className='logo-img' alt='logo' width="100" height="100"  />
            <form onSubmit={handleUpdateSubmit}>
                <Link to='/logged' >
                    <UndoRoundedIcon />
                </Link>
                <input
                    type="text"
                    placeholder='imię..'
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="number"
                    placeholder='wiek..'
                    value={age}
                    onChange={handleAgeChange}
                />
                <input
                    type='email'
                    placeholder='adres e-mail..'
                    value={email}
                    onChange={event => handleEmailChange(event)}
                />
                <input
                    type='password'
                    placeholder='hasło..'
                    // value={password}
                    onChange={event => handlePasswordChange(event)}
                />
                <button>Edytuj</button>
            </form>
        </div>
    );
}

export default MyProfile;
