import Burger from "./Burger";
import StyledUl from "./styled/StyledUl";
import Link from "./buttons/Link";
import React from "react";
import actions from "../../app/userActions/duck/actions";
import AuthService from '../../services/auth.service';
import { useDispatch } from "react-redux";
import logo from "../../resources/images/logos/logo_two_colors_long.png";
import Logout from './buttons/Logout';
import DropDown from "./buttons/DropDown";
import { moreButtons, moreLinks } from './dataToFillDropDown';
import ForumIcon from '@material-ui/icons/Forum';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

//todo fix the dropdown list when the button is near the bottom - open it in the top direction
const MenuLogged = ({ isOpen, handleOpenMenu }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        //remove user from app state/redux
        dispatch(actions.logout());
        //remove token from localStorage
        AuthService.logout();
    }

    return (
        <>
            <Burger isOpen={isOpen} handleOpenMenu={handleOpenMenu}/>
            {isOpen ? (
                <StyledUl isOpen={isOpen}>
                    <li>
                        <GroupAddRoundedIcon/>
                        <Link
                            path='/matches'
                            name='PARY'
                        />
                    </li>
                    <li>
                        <ForumIcon />
                        <Link
                            path='/messages'
                            name='WIADOMOŚCI'
                        />
                    </li>
                    <li>
                        <EventNoteRoundedIcon/>
                        <Link
                            path='/events'
                            name='WYDARZENIA'
                        />
                    </li>
                    <li>
                        <PersonRoundedIcon/>
                        <Link
                            path='/my-profile'
                            name='MÓJ PROFIL'
                        />
                    </li>
                    <li>
                        <ExitToAppRoundedIcon/>
                        <Logout/>
                    </li>
                    <li>
                        <DropDown
                            name='WIĘCEJ'
                            links={moreLinks}
                            buttons={moreButtons}
                        />
                    </li>
                    <li>
                        <Link
                            path='/logged'
                            name={<img src={logo} className='logo-img' alt='logo' width="100" height="50"  />}
                        />
                    </li>
                </StyledUl>
            ) : null }
        </>
    )
}

export default MenuLogged;
