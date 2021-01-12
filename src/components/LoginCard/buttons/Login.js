import React from "react";
import { Link } from 'react-router-dom';

//za pomoca ref={emailInput} zebrac wartosci w momencie potwierdzenia
const Login = ({ handleLoginSubmit, handleEmailChange, handlePasswordChange }) => (
    <>
        <form onSubmit={handleLoginSubmit}>
            <Link to='/' >
                Cofnij
            </Link>
            <input
                type='text'
                placeholder='adres e-mail..'
                // value={email}
                onChange={event => handleEmailChange(event)}
            />
            <input
                type='password'
                placeholder='hasło..'
                // value={password}
                onChange={event => handlePasswordChange(event)}
            />
            <button>
                ZALOGUJ SIĘ
            </button>
        </form>
    </>
)

export default Login;
