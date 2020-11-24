import React, { useState } from 'react';
import './LoginCard.css';
import logo from '../../resources/katoMeetApp_Logo.png';

function LoginCard() {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const startingButtons = (
        <>
            <button
                onClick={() => setIsLogin(true)}>
                ZALOGUJ SIĘ
            </button>
            <button
                onClick={() => setIsRegister(true)}>
                ZAREJESTRUJ SIĘ
            </button>
        </>
    )

    const loginButtons = (
        <>
            <form>
                <input
                    type='text'
                    placeholder='adres e-mail..'
                />
                <input
                    type='password'
                    placeholder='hasło..' />
                <button>ZALOGUJ SIĘ</button>
            </form>
        </>
    )

    const registerButtons = (
        <>
            <form >
                <input
                    type='text'
                    placeholder='adres e-mail..'
                />
                <input
                    type='password'
                    placeholder='hasło..'
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
