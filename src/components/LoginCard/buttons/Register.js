import React from "react";
import { Link } from "react-router-dom";

const Register = ({ handleRegisterSubmit, handleNameChange, handleAgeChange, handleEmailChange, handlePasswordChange }) =>  (
    <>
        <form onSubmit={handleRegisterSubmit}>
            <Link to='/' >
                Cofnij
            </Link>
            <input
            type="text"
            placeholder='imię..'
            onChange={handleNameChange}
            />
            <input
                type="number"
                placeholder='wiek..'
                onChange={handleAgeChange}
            />
            <input
                type='email'
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
            <button>ZAREJESTRUJ SIĘ</button>
        </form>
    </>
)

export default Register;
