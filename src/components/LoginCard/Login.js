import React, { useState } from 'react';
import logo from '../../resources/images/logos/logo_two_colors.png';
import actions from '../../app/userActions/duck/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import Layout from "../../layout/layout";
import StyledButton from "../UI/StyledButton";
import StyledInput from "../UI/StyledInput";
import StyledFormDiv, { StyledWrongP } from './styled/StyledFormDiv';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

//localStorage with login user data ?
//add client side validation with formik

function Login() {
    const [email, setEmail] = useState('');//all login/register data to one object ?
    const [password, setPassword] = useState('');
    const [areProperCredentials, setAreProperCredentials] = useState(true);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleEmailChange = event => (
        setEmail(event.target.value)
    )

    const handlePasswordChange = event => (
        setPassword(event.target.value)
    )

    const handleLoginSubmit = async event => {
        event.preventDefault();
        try {
            setLoading(true);
            const user = await AuthService.login(email, password);
            dispatch(actions.login(user));
            history.push('/logged');
        } catch (err) {
            setLoading(false);
            setAreProperCredentials(false);
        }
    }

    return (
        <Layout>
            <img src={logo} className='logo-img' alt='logo' width="260" height="240"  />
            <StyledFormDiv>
                {loading ?
                    <LoadingSpinner /> :
                    <form onSubmit={handleLoginSubmit}>
                        <StyledInput
                            type='text'
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
                        {areProperCredentials ?
                            null :
                            <StyledWrongP>*Upss nieprawidłowe hasło lub email</StyledWrongP>}
                        <StyledButton>
                            ZALOGUJ SIĘ
                        </StyledButton>
                    </form>
                }
            </StyledFormDiv>
        </Layout>
    );
}

export default Login;
