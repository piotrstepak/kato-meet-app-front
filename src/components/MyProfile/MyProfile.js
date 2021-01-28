import React, { useState } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from 'react-redux';
import Layout from "../../layout/layout";
import StyledButton from "../UI/StyledButton";
import StyledInput from "../UI/StyledInput";
import StyledFormDiv from '../LoginCard/styled/StyledFormDiv';
import StyledImage from "./styled/StyledImage";
import actions from "../../app/userActions/duck/actions";
import StyledScroll from "./styled/StyledScroll";
import StyledTextArea from "./styled/StyledTextArea";
import StyledCheckBox from "./styled/StyledCheckBox";

function MyProfile() {
    let loggedUser = useSelector(state => state.loginLogout.user);//consider store with hooks
    const UPDATE_USER_API = `http://localhost:3001/users/update/${loggedUser._id}`;
    const dispatch = useDispatch();

    //add password changing
    const [email, setEmail] = useState(loggedUser.email);
    const [password, setPassword] = useState(loggedUser.password);
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [name, setName] = useState(loggedUser.name);
    const [age, setAge] = useState(loggedUser.age);
    const [description, setDescription] = useState(loggedUser.description);
    const [sex, setSex] = useState(loggedUser.sex);

    const handleUpdateSubmit = e => {
        e.preventDefault();
        const updatedLoggedUser = {
            name: name,
            age: age,
            email: email,
            _id: loggedUser._id,
            images: loggedUser.images,
            description: description,
            sex: sex,
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

    const handlePasswordConfirmationChange = event => (
        setPasswordConfirmation(event.target.value)
    )

    const handleDescriptionChange = event => (
        setDescription(event.target.value)
    )

    const handleSexChange = event => (
        setSex(event.target.value)
    )

    return (
        <Layout>
            <StyledScroll>
                <StyledImage src={loggedUser.images[0]} className='logo-img' alt='logo' width="100" height="100"  />
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
                            placeholder='zmień hasło..'
                            // value={password}
                            onChange={event => handlePasswordChange(event)}
                        />
                        <StyledInput
                            type='password'
                            placeholder='powtórz hasło..'
                            // value={password}
                            onChange={event => handlePasswordConfirmationChange(event)}
                        />
                        <StyledTextArea
                            placeholder='opis..'
                            onChange={event => handleDescriptionChange(event)}
                            // value='dupa'
                            // defaultValue='dupa'
                        >{description}
                        </StyledTextArea>
                        <StyledCheckBox>
                            <h3>Płeć</h3>
                            <label>
                                Mężczyzna
                                <input
                                    type="radio"
                                    checked={sex === 'man' ? 'man' : ''}
                                    value="man"
                                    onChange={event => handleSexChange(event)}
                                />
                                    <span className="checkmark"></span>
                            </label>
                            <label>
                                Kobieta
                                <input
                                    type="radio"
                                    checked={sex === 'woman' ? 'woman' : ''}
                                    value="woman"
                                    onChange={event => handleSexChange(event)}
                                />
                                    <span className="checkmark"></span>
                            </label>
                        </StyledCheckBox>
                        <StyledButton>Edytuj</StyledButton>
                    </form>
                </StyledFormDiv>
            </StyledScroll>
        </Layout>
    );
}

export default MyProfile;
