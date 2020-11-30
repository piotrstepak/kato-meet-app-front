import React, { useState } from 'react';
import './LoginCard.css';
import logo from '../../resources/katoMeetApp_Logo.png';

function LoginCard({ data }) {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = (event) => {
        //na czas ladowania/szukania usera wyswietlic np ladowanie.. albo jakis spinner
        let user;
        user = data.filter(user => (
            user.email === email && user.password === password
        ))

        const incorrectCredentials = () => {
            alert('Niewłaściwy email lub hasło..');
            event.preventDefault();
        }

        const correctCredentials = () => {
            //ustawic usera w app.js
            alert('Correct! email: ' + email + ', pass: ' + password)
            console.log(user)
        }

        (user.length === 0) ? incorrectCredentials() : correctCredentials();
    }

    const handleRegisterSubmit = () => {
        alert('Email został wysłany. Prosimy potwierdzić rejestrację.')
        //wyslac maila do potwierdzenia rejestracji
        //jesli potwierdzi to dodac usera do bazy
    }

    const handleEmailChange = (event) => (
        setEmail(event.target.value)
    )

    const handlePasswordChange = (event) => (
        setPassword(event.target.value)
    )

    const startingButtons = (
        <>
            <div>
                <button
                    onClick={() => setIsLogin(true)}>
                    ZALOGUJ SIĘ
                </button>
                <button
                    onClick={() => setIsRegister(true)}>
                    ZAREJESTRUJ SIĘ
                </button>
            </div>

        </>
    )

    const loginButtons = (
        <>
            <form onSubmit={handleLoginSubmit}>
                <input
                    type='text'
                    placeholder='adres e-mail..'
                    value={email}
                    onChange={event => handleEmailChange(event)}
                />
                <input
                    type='password'
                    placeholder='hasło..'
                    value={password}
                    onChange={event => handlePasswordChange(event)}
                />
                <button>
                    ZALOGUJ SIĘ
                </button>
            </form>
        </>
    )

    const registerButtons = (
        <>
            <form onSubmit={handleRegisterSubmit}>
                <input
                    type='text'
                    placeholder='adres e-mail..'
                    value={email}
                    onChange={event => handleEmailChange(event)}
                />
                <input
                    type='password'
                    placeholder='hasło..'
                    value={password}
                    onChange={event => handlePasswordChange(event)}
                />
                <button>ZAREJESTRUJ SIĘ</button>
            </form>
        </>
    )

    return (
        <div className='loginCard'>
            <img src={logo} className='logo-img' alt='logo' width="300" height="300"  />
            <div className='buttons'>
                {(isLogin || isRegister) ? (isLogin ? loginButtons : registerButtons) : startingButtons}
            </div>
        </div>
    );
}

export default LoginCard;
