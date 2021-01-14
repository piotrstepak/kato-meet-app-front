import React from 'react';
import mockDB from "../../../utilities/mockDB";

const RestartDB = () => {
    const handleClick = () => {
        mockDB.clearDB();
        mockDB.fillDB();
    }

    return (
        <button onClick={() => handleClick()}>
            ResetBazy
        </button>
    );
}

export default RestartDB;
