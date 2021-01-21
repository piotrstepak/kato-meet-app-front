import React from 'react';
import StyledButton from '../UI/StyledButton';
import Layout from "../../layout/layout";
import StyledFormDiv from "./styled/StyledFormDiv";
import logo from '../../resources/images/logos/logo_two_colors.png';
import { useHistory } from 'react-router-dom';

function LoginCard() {
    const history = useHistory();

    const handleIsLogin = () => {
        history.push('/login')
    };
    const handleIsRegister = () => {
        history.push('/register')
    };

    return (
        <Layout>
            <img src={logo} className='logo-img' alt='logo' width="300" height="280"  />
            <StyledFormDiv>
                <StyledButton
                    onClick={() => handleIsLogin()}>
                    ZALOGUJ SIĘ
                </StyledButton>
                <StyledButton
                    onClick={() => handleIsRegister()}>
                    ZAREJESTRUJ SIĘ
                </StyledButton>
            </StyledFormDiv>
        </Layout>
    );
}

export default LoginCard;
