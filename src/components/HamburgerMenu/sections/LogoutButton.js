import React from 'react';
import actions from '../../../app/loginLogout/duck/actions';
import { connect } from 'react-redux';

function LogoutButton({ logout }) {
    const handleLogout = () => {
        logout()
    }

    return (
        <button onClick={() => {handleLogout()}}>
            WYLOGUJ
        </button>
    );
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(actions.logout())
})

export default connect(null, mapDispatchToProps)(LogoutButton);
