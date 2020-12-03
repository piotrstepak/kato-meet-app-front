import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import React from "react";

const CloseMenu = ({ handleOpenMenu }) => (
    <button onClick={() => handleOpenMenu()}>
        <CloseRoundedIcon
            fontSize='large'
            className='hamburgerMenu-close-icon'
        />
    </button>
)

export default CloseMenu;
