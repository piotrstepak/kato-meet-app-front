import React, { useEffect, useState } from 'react';
import './LoginCard.css';
import logo from '../../resources/katoMeetApp_Logo.png';
import actions from '../../app/loginLogout/duck/actions';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

//localStorage with login user data ?
//isolate common parts from Login and Register component ? store ?

function Login() {
    const [users, setUsers] = useState([]);

    const [email, setEmail] = useState('');//all login/register data to one object
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
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

    const handleLoginSubmit = (event) => {
        //while loading or user checking display eg ladowanie.. or sth like spinner
        let user;
        user = users.filter(user => (
            user.email === email && user.password === password
        ))

        const incorrectCredentials = () => {
            event.preventDefault();
            alert('Niewłaściwy email lub hasło..');
        }

        const correctCredentials = () => {
            const firstUser = 0;//consider better option
            dispatch(actions.login(user[firstUser]));
            history.push('/logged');
        }

        (user.length === 0) ? incorrectCredentials() : correctCredentials();
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
            <img src={logo} className='logo-img' alt='logo' width="300" height="300"  />
            <div className='buttons'>
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
            </div>
        </div>
    );
}

export default Login;
