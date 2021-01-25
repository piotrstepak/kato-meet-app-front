import React, {useState} from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from 'react-redux';
import Layout from "../../layout/layout";
import StyledButton from "../UI/StyledButton";
import StyledInput from "../UI/StyledInput";
import StyledFormDiv from '../LoginCard/styled/StyledFormDiv';
import StyledImage from "./styled/StyledImage";
import actions from "../../app/userActions/duck/actions";

function MyProfile() {
    let loggedUser = useSelector(state => state.loginLogout.user);//consider store with hooks
    const UPDATE_USER_API = `http://localhost:3001/users/update/${loggedUser._id}`;
    const dispatch = useDispatch();

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
            _id: loggedUser._id,
            image: loggedUser.image,
            likedUsers: loggedUser.likedUsers,
            dislikedUsers: loggedUser.dislikedUsers,
            likedBy: loggedUser.likedBy
        }
        dispatch(actions.update(updatedLoggedUser));

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
        <Layout>
            <StyledImage src={loggedUser.image} className='logo-img' alt='logo' width="100" height="100"  />
            <StyledFormDiv>
                <form onSubmit={handleUpdateSubmit}>
                    <StyledInput
                        type="text"
                        placeholder='imię..'
                        value={name}
                        onChange={handleNameChange}
                    />
                    <StyledInput
                        type="number"
                        placeholder='wiek..'
                        value={age}
                        onChange={handleAgeChange}
                    />
                    <StyledInput
                        type='email'
                        placeholder='adres e-mail..'
                        value={email}
                        onChange={event => handleEmailChange(event)}
                    />
                    <StyledInput
                        type='password'
                        placeholder='hasło..'
                        // value={password}
                        onChange={event => handlePasswordChange(event)}
                    />
                    <StyledButton>Edytuj</StyledButton>
                </form>
            </StyledFormDiv>
        </Layout>
    );
}

export default MyProfile;
