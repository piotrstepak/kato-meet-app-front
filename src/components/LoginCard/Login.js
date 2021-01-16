import React, { useState } from 'react';
import './LoginCard.css';
import logo from '../../resources/logo_two_colors.png';
import actions from '../../app/loginLogout/duck/actions';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import UndoRoundedIcon from '@material-ui/icons/UndoRounded';

//localStorage with login user data ?
//add client side validation with formik

function Login() {
    const [email, setEmail] = useState('');//all login/register data to one object ?
    const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleEmailChange = event => (
        setEmail(event.target.value)
    )

    const handlePasswordChange = event => (
        setPassword(event.target.value)
    )

    const handleLoginSubmit = async event => {
        event.preventDefault();
        // setLoading(true);
        try {
            const user = await AuthService.login(email, password);
            dispatch(actions.login(user));
            history.push('/logged');
        } catch (err) {
            alert('Niewłaściwy email lub hasło..')
        }
    }

    return (
        //to undo the button instead of the link ?
        <div className='loginCard'>
            <img src={logo} className='logo-img' alt='logo' width="300" height="280"  />
            <div className='buttons'>
                <form onSubmit={handleLoginSubmit}>
                    <Link to='/' >
                        <UndoRoundedIcon />
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
