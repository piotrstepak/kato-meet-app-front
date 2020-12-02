import React, { useState } from 'react';
import './HamburgerMenu.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import LogoutButton from "./sections/LogoutButton";

//powynosic buttony do folderu sections
function HamburgerMenu({ isLogged }) {
    const [open, setOpen] = useState(false);

    const closeButtonSection = (
        <button onClick={() => setOpen(!open)}>
            <CloseRoundedIcon
                fontSize='large'
                className='hamburgerMenu-close-icon'
            />
        </button>
    )

    const applicationSection = (
        <button>
            APLIKACJA
        </button>
    )

    const howToStartSection = (
        <button>
            JAK ZACZĄĆ
        </button>
    )

    const missionSection = (
        <button>
            MISJA
        </button>
    )

    const contactSection = (
        <div className='contact'>
            <button>
                KONTAKT
                <ArrowDropDownRoundedIcon
                    fontSize='large'
                    className='hamburgerMenu-dropDown-icon'
                />
            </button>
            <div className='contact-dropDown'>
                <button>facebook</button>
                <button>instagram</button>
                <button>e-mail</button>
            </div>
        </div>
    )

    const legalInformationSection = (
        <div className='information'>
            <button>
                INFORMACJE PRAWNE
                <ArrowDropDownRoundedIcon
                    fontSize='large'
                    className='hamburgerMenu-dropDown-icon'
                />
            </button>
            {/*{infoContent ? infoClicked() : infoNotClicked()}*/}
            <div className='information-dropDown'>
                <button>prywatność</button>
                <button>regulamin</button>
                <button>polityka</button>
            </div>
        </div>
    )

    const matchesSection = (
        <button>
            PARY
        </button>
    )

    const messagesSection = (
        <button>
            WIADOMOŚCI
        </button>
    )

    const eventsSection = (
        <button>
            WYDARZENIA
        </button>
    )

    const myProfileSection = (
        <button>
            MÓJ PROFIL
        </button>
    )

    const moreSection = (
        <div className='more'>
            <button>
                WIĘCEJ
                <ArrowDropDownRoundedIcon
                    fontSize='large'
                    className='hamburgerMenu-dropDown-icon'
                />
            </button>
            <div className='more-dropDown'>
                {missionSection}
                {howToStartSection}
                {applicationSection}
                {contactSection}
                {legalInformationSection}
            </div>
        </div>
    )

    const logoSection = (
        <button>
            LOGO
        </button>
    )

    const handleStartingMenuOpened = () => {
        return (
            <>
                {closeButtonSection}
                {missionSection}
                {howToStartSection}
                {applicationSection}
                {contactSection}
                {legalInformationSection}
            </>
        )
    }

    const handleLoggedMenuOpened = () => {
        return (
            <>
                {closeButtonSection}
                {matchesSection}
                {messagesSection}
                {eventsSection}
                {myProfileSection}
                <LogoutButton />
                {moreSection}
                {logoSection}
            </>
        )
    }

    const handleMenuClosed = () => {
       return (
        <>
            <button onClick={() => setOpen(!open)}>
                <MenuRoundedIcon
                    fontSize='large'
                    className='hamburgerMenu-open-icon'
                />
            </button>
        </>
       )
   }

    return (
        <div className='hamburgerMenu'>
            {isLogged ?
                (open ? handleLoggedMenuOpened() : handleMenuClosed()) :
                (open ? handleStartingMenuOpened() : handleMenuClosed())}
            {/*{open ? handleStartingMenuOpened() : handleMenuClosed()}*/}
            {/*{open ? handleLoggedMenuOpened() : handleMenuClosed()}*/}
        </div>
    );
}

export default HamburgerMenu;
