import React, { useEffect, useState } from 'react';
import './LoginCard.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

//isolate common parts from Login and Register component ? store ?

function Register() {
    const [users, setUsers] = useState([]);

    const [email, setEmail] = useState('');//all register data to one object ?
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const usersAPI = 'http://localhost:3001/users/';

        axios.get(usersAPI)
            .then(res => {
                setUsers(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        //check if the given email exists in db
        users.filter(user => user.email === email) ?
            alert('Podany email już istnieje, zaloguj się lub użyj innego.') :
            alert('Email został wysłany. Prosimy potwierdzić rejestrację.')
        //send an email to confirm registration

        //if user confirms, add him to db
        const userToAdd = {
            name: name,
            age: age,
            email: email,
            password: password,
        }

        axios.post('http://localhost:3001/users/add', userToAdd)
            .then(res => console.log(res.data));

        history.push('/');// /login
    }

    const handleAgeChange = event => {
        setAge(event.target.value)
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => (
        setEmail(event.target.value)
    )

    const handlePasswordChange = (event) => (
        setPassword(event.target.value)
    )

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
