import React from 'react';
import './LoginCard.css';
import logo from '../../resources/katoMeetApp_Logo.png';
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
        <div className='loginCard'>
            <img src={logo} className='logo-img' alt='logo' width="300" height="300"  />
            <div className='buttons'>
                    <button
                        onClick={() => handleIsLogin()}>
                        ZALOGUJ SIĘ
                    </button>
                    <button
                        onClick={() => handleIsRegister()}>
                        ZAREJESTRUJ SIĘ
                    </button>
            </div>
        </div>
    );
}

export default LoginCard;
