import React from "react";
import  '../header/header.css';
import logo from '../../assets/stackline_logo.svg'

const Header = () => {
    return(
        <header>
            <img src={logo} alt='Header logo' className="logo" />
        </header>
    );
}

export default Header;