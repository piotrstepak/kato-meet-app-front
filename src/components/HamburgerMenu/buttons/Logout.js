import React from 'react';
import actions from '../../../app/userActions/duck/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import AuthService from "../../../services/auth.service";
import StyledButton from "../styled/StyledButton";

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
        <StyledButton onClick={() => handleLogout()}>
            WYLOGUJ
        </StyledButton>
    // <Link
    //     to='/'
    //     onClick={() => handleLogout()}>
    //     WYLOGUJ
    // </Link>
    );

}

export default Logout;
