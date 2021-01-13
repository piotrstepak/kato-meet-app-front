import React, { useState } from 'react';
import './LoginCard.css';
import { Link, useHistory } from 'react-router-dom';
import AuthService from "../../services/auth.service";

//add client side validation with formik

function Register() {
    const [email, setEmail] = useState('');//all register data to one object ?
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    // const [loading, setLoading] = useState(false);

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
        // setLoading(true);
        try {
            await AuthService.register(name, age, email, password);
            history.push('/login');
        } catch (err) {
            alert('Podany email już istnieje, zaloguj się lub użyj innego.');
        }
    }

    return (
        //to undo the button instead of the link ?
        <div className='loginCard'>
            <div className='buttons'>
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
            </div>
        </div>
    );
}

export default Register;
