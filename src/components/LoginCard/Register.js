import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import logo from '../../resources/images/logos/logo_two_colors_long.png';
import Layout from "../../layout/layout";
import StyledButton from "../UI/StyledButton";
import StyledInput from "../UI/StyledInput";
import StyledFormDiv, {StyledWrongP} from './styled/StyledFormDiv';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

//add client side validation with formik

function Register() {
    const [email, setEmail] = useState('');//all register data to one object ?
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

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
        setLoading(true);
        try {
            console.log(name)
            await AuthService.register(name, age, email, password);
            history.push('/login');
        } catch (err) {
            setLoading(false);
            setIsError(true);
            // alert('Podany email już istnieje, zaloguj się lub użyj innego.');
        }
    }

    return (
        <Layout>
            <img src={logo} className='logo-img' alt='logo'  width="300" height="120" />
            {loading ?
                <LoadingSpinner/> :
                <StyledFormDiv>
                    <form onSubmit={handleRegisterSubmit}>
                        <StyledInput
                            type="text"
                            value={name}
                            // maxlength = "5"
                            placeholder='imię..'
                            onChange={handleNameChange}
                        />
                        <StyledInput
                            type="number"
                            value={age}
                            placeholder='wiek..'
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
                            value={password}
                            onChange={event => handlePasswordChange(event)}
                        />
                        {isError ?
                            <StyledWrongP>*Upss coś poszło nie tak</StyledWrongP> :
                            null
                        }
                        <StyledButton>
                            ZAREJESTRUJ SIĘ
                        </StyledButton>
                    </form>
                </StyledFormDiv>
            }
        </Layout>
    );
}

export default Register;
