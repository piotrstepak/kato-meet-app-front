import Burger from "./Burger";
import StyledUl from "./styled/StyledUl";
import Link from "./buttons/Link";
import React from "react";
import RestartDB from "./buttons/RestartDB";
import DropDown from "./buttons/DropDown";
import { contactLinks,
    legalInformationLinks } from './dataToFillDropDown'

const MenuStart = ({ isOpen, handleOpenMenu }) => {
    return (
        <>
            <Burger
                isOpen={isOpen}
                handleOpenMenu={handleOpenMenu}
            />
            {isOpen ? (
                <StyledUl isOpen={isOpen}>
                    <li>
                        <Link
                            path='/mission'
                            name='MISJA'
                        />
                    </li>
                    <li>
                        <Link
                            path='/how-to-start'
                            name='JAK ZACZĄĆ'
                        />
                    </li>
                    <li>
                        <Link
                            path='/application'
                            name='APLIKACJA'
                        />
                    </li>
                    <li>
                        <DropDown
                            name='KONTAKT'
                            links={contactLinks}
                        />
                    </li>
                    <li>
                        <DropDown
                            name='INFORMACJE PRAWNE'
                            links={legalInformationLinks}
                        />
                    </li>
                    <li>
                        <RestartDB />
                    </li>
                </StyledUl>
            ) : null }
        </>
    )
}

export default MenuStart;
