import React from "react";

const Starting = ({ handleIsLogin, handleIsRegister }) => (
    <>
        <div>
            <button
                onClick={() => handleIsLogin()}>
                ZALOGUJ SIĘ
            </button>
            <button
                onClick={() => handleIsRegister()}>
                ZAREJESTRUJ SIĘ
            </button>
        </div>

    </>
)

export default Starting;
