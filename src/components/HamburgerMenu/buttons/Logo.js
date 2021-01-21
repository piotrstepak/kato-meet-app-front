import React from "react";
import logo from '../../../resources/images/logos/logo_two_colors_long.png'
import { Link } from "react-router-dom";

const Logo = () => (
    <Link to='/logged'>
        <img src={logo} className='logo-img' alt='logo' width="100" height="50"  />
    </Link>

)

export default Logo;
