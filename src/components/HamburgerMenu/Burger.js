import React from 'react';
import StyledBurger from "./styled/StyledBurger";

const Burger = ({ isOpen, handleOpenMenu}) => {
    return (
        <>
            <StyledBurger isOpen={isOpen} onClick={() => handleOpenMenu()}>
                <div />
                <div />
                <div />
            </StyledBurger>

        </>
    )
}
export default Burger;
