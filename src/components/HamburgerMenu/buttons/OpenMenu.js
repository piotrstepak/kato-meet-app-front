import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import React from "react";

const OpenMenu = ({ handleCloseMenu }) => (
    <button onClick={() => handleCloseMenu()}>
        <MenuRoundedIcon
            fontSize='large'
            className='hamburgerMenu-open-icon'
        />
    </button>
)

export default OpenMenu;
