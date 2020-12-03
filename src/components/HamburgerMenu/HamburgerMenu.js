import React, { useState } from 'react';
import './HamburgerMenu.css';
import Logout from "./buttons/Logout";
import LegalInformationSection from "./buttons/LegalInformation";
import Contact from "./buttons/Contact";
import Application from "./buttons/Application";
import CloseMenu from "./buttons/CloseMenu";
import Matches from "./buttons/Matches";
import Mission from "./buttons/Mission";
import Messages from "./buttons/Messages";
import MyProfile from "./buttons/MyProfile";
import HowToStart from "./buttons/HowToStart";
import Events from "./buttons/Events";
import Logo from "./buttons/Logo";
import OpenMenu from "./buttons/OpenMenu";
import More from "./buttons/More";
//import like * from buttons

function HamburgerMenu({ isLogged }) {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleMenuClosed = () => {
        return <OpenMenu handleCloseMenu={handleOpenMenu}/>
    }

    const handleStartingMenuOpened = () => {
        return (
            <>
                <CloseMenu handleOpenMenu={handleOpenMenu}/>
                <Mission />
                <HowToStart />
                <Application />
                <Contact />
                <LegalInformationSection />
            </>
        )
    }

    const handleLoggedMenuOpened = () => {
        return (
            <>
                <CloseMenu handleOpenMenu={handleOpenMenu}/>
                <Matches />
                <Messages />
                <Events />
                <MyProfile />
                <Logout />
                <More />
                <Logo />
            </>
        )
    }

    return (
        <div className='hamburgerMenu'>
            {isLogged ?
                (openMenu ? handleLoggedMenuOpened() : handleMenuClosed()) :
                (openMenu ? handleStartingMenuOpened() : handleMenuClosed())}
        </div>
    );
}

export default HamburgerMenu;
