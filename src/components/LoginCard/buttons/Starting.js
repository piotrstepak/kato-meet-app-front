import React from "react";
import { Link } from 'react-router-dom';

const Starting = ({ handleIsLogin, handleIsRegister }) => (
    <>
        <div>
            <button
                onClick={() => handleIsLogin()}>
                ZALOGUJ SIĘ
            </button>
            {/*<Link*/}
            {/*    to='/login'*/}
            {/*    // onClick={() => handleIsLogin()}*/}
            {/*    >*/}
            {/*    ZALOGUJ SIĘ*/}
            {/*</Link>*/}
            <button
                onClick={() => handleIsRegister()}>
                ZAREJESTRUJ SIĘ
            </button>
        </div>

    </>
)

export default Starting;
