import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import React from "react";
import StyledButton from "../styled/StyledButton";

// add close menu color fixed
const CloseMenu = ({ handleOpenMenu }) => (
    <StyledButton onClick={() => handleOpenMenu()}>
        <CloseRoundedIcon
            fontSize='large'
            className='hamburgerMenu-close-icon'
        />
    </StyledButton>
)

export default CloseMenu;
