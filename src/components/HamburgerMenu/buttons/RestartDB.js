import React from 'react';
import mockDB from "../../../utils/mockDB";
import StyledButton from "../styled/StyledButton";

const RestartDB = () => {
    const handleClick = async () => {
        await mockDB.clearDB();
        await mockDB.fillDB();
    }

    return (
        <StyledButton onClick={() => handleClick()}>
            ResetBazy
        </StyledButton>
    );
}

export default RestartDB;
