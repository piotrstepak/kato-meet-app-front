import React from 'react';
import actions from '../../../app/loginLogout/duck/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import AuthService from "../../../services/auth.service";

function Logout() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        //remove user from app state/redux
        dispatch(actions.logout());
        //remove token from localStorage
        AuthService.logout();
        history.push('/');
    }

    return (
        <button onClick={() => handleLogout()}>
            WYLOGUJ
        </button>
    );
    {/*<Link*/}
    {/*    to='/'*/}
    {/*    onClick={() => handleLogout()}>*/}
    {/*    WYLOGUJ*/}
    {/*</Link>*/}
}

export default Logout;
