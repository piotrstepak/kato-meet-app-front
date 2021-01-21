import React, { useState } from 'react';
import StyledHamburger from "./styled/StyledHamburger";
import MenuStart from './MenuStart'
import MenuLogged from "./MenuLogged";

function HamburgerMenu({ isLogged }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <StyledHamburger>
            {isLogged ?
                <MenuLogged
                    isOpen={isOpen}
                    handleOpenMenu={handleOpenMenu}
                /> :
                <MenuStart
                    isOpen={isOpen}
                    handleOpenMenu={handleOpenMenu}
                />}
        </StyledHamburger>
    );
}

export default HamburgerMenu;
