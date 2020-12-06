import React from "react";

const Register = ({ handleRegisterSubmit, handleEmailChange, handlePasswordChange }) =>  (
    <>
        <form onSubmit={handleRegisterSubmit}>
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
            <button>ZAREJESTRUJ SIĘ</button>
        </form>
    </>
)

export default Register;
