import Burger from "./Burger";
import StyledUl from "./styled/StyledUl";
import Link from "./buttons/Link";
import React from "react";
import RestartDB from "./buttons/RestartDB";
import DropDown from "./buttons/DropDown";
import { contactLinks,
    legalInformationLinks } from './dataToFillDropDown';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';

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
                        <EmojiObjectsRoundedIcon/>
                        <Link
                            path='/mission'
                            name='MISJA'
                        />
                    </li>
                    <li>
                        <ContactSupportRoundedIcon/>
                        <Link
                            path='/how-to-start'
                            name='JAK ZACZĄĆ'
                        />
                    </li>
                    <li>
                        <GetAppRoundedIcon/>
                        <Link
                            path='/application'
                            name='APLIKACJA'
                        />
                    </li>
                    <li>
                        <ContactMailIcon/>
                        <DropDown
                            name='KONTAKT'
                            links={contactLinks}
                        />
                    </li>
                    <li>
                        <ImportContactsRoundedIcon/>
                        <DropDown
                            name='INFORMACJE PRAWNE'
                            links={legalInformationLinks}
                        />
                    </li>
                    <li>
                        <RotateLeftRoundedIcon/>
                        <RestartDB />
                    </li>
                </StyledUl>
            ) : null }
        </>
    )
}

export default MenuStart;
