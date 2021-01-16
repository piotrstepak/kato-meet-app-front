import React from 'react';
import mockDB from "../../../utils/mockDB";

const RestartDB = () => {
    const handleClick = async () => {
        await mockDB.clearDB();
        await mockDB.fillDB();
    }

    return (
        <button onClick={() => handleClick()}>
            ResetBazy
        </button>
    );
}

export default RestartDB;
