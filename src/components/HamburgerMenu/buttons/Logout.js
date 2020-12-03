import React from 'react';
import actions from '../../../app/loginLogout/duck/actions';
import { useDispatch } from 'react-redux';

function Logout() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(actions.logout());
    }

    return (
        <button onClick={() => {handleLogout()}}>
            WYLOGUJ
        </button>
    );
}

export default Logout;
