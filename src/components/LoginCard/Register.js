import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import logo from '../../resources/images/logos/logo_two_colors_long.png';
import Layout from "../../layout/layout";
import StyledButton from "../UI/StyledButton";
import StyledInput from "../UI/StyledInput";
import StyledFormDiv from './styled/StyledFormDiv';

//add client side validation with formik

function Register() {
    const [email, setEmail] = useState('');//all register data to one object ?
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    // const [loading, setLoading] = useState(false);

    const history = useHistory();

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

    const handleRegisterSubmit = async event => {
        event.preventDefault();
        // setLoading(true);
        try {
            await AuthService.register(name, age, email, password);
            history.push('/login');
        } catch (err) {
            alert('Podany email już istnieje, zaloguj się lub użyj innego.');
        }
    }

    return (
        <Layout>
            <img src={logo} className='logo-img' alt='logo'  width="300" height="120" />
            <StyledFormDiv>
                <form onSubmit={handleRegisterSubmit}>

                    <StyledInput
                        type="text"
                        placeholder='imię..'
                        onChange={handleNameChange}
                    />
                    <StyledInput
                        type="number"
                        placeholder='wiek..'
                        onChange={handleAgeChange}
                    />
                    <StyledInput
                        type='email'
                        placeholder='adres e-mail..'
                        // value={email}
                        onChange={event => handleEmailChange(event)}
                    />
                    <StyledInput
                        type='password'
                        placeholder='hasło..'
                        // value={password}
                        onChange={event => handlePasswordChange(event)}
                    />
                    <StyledButton>ZAREJESTRUJ SIĘ</StyledButton>
                </form>
            </StyledFormDiv>
        </Layout>
    );
}

export default Register;
