import React, { useState } from 'react';
import './LoginCard.css';
import logo from '../../resources/katoMeetApp_Logo.png';
import actions from '../../app/loginLogout/duck/actions';
import { useDispatch } from 'react-redux';
import Starting from "./buttons/Starting";
import Login from "./buttons/Login";
import Register from "./buttons/Register";

//localStorage dla danych logowania uzytkownika ?
//po kliknieciu w login/register dolozyc stzralke do powrotu

function LoginCard({ data }) {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleLoginSubmit = (event) => {
        //na czas ladowania/szukania usera wyswietlic np ladowanie.. albo jakis spinner
        let user;
        user = data.filter(user => (
            user.email === email && user.password === password
        ))

        const incorrectCredentials = () => {
            event.preventDefault();
            alert('Niewłaściwy email lub hasło..');
        }

        const correctCredentials = () => {
            dispatch(actions.login(user[0]));
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

    const handleIsLogin = () => setIsLogin(true);
    const handleIsRegister = () => setIsRegister(true);

    return (
        <div className='loginCard'>
            <img src={logo} className='logo-img' alt='logo' width="300" height="300"  />
            <div className='buttons'>
                {(isLogin || isRegister) ?
                    (isLogin ?
                        <Login
                            handleLoginSubmit={handleLoginSubmit}
                            handleEmailChange={handleEmailChange}
                            handlePasswordChange={handlePasswordChange}
                        /> :
                        <Register
                            handleRegisterSubmit={handleRegisterSubmit}
                            handleEmailChange={handleEmailChange}
                            handlePasswordChange={handlePasswordChange}
                        />
                    ) :
                    <Starting
                        handleIsLogin={handleIsLogin}
                        handleIsRegister={handleIsRegister}
                    />
                }
            </div>
        </div>
    );
}

export default LoginCard;
