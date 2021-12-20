import React, { useState } from 'react';
import Logo from '../../Images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
       setOpen(!open) 
    }

    return (
        <nav id="nav">
            <div className="logo-container">
                <img className="logo-img" src={Logo} alt="d8 group logo" />
            </div>
            <div className="menu-container">
                <div className={open? 'transitioned-menu' :'menu-icon'} onClick={toggleOpen}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
                {
                    open?
                    <div className="menu">
                        <button onClick={toggleOpen}>X</button>
                    <ul>
                        <li>Leader</li>
                        <li>Leader</li>
                        <li>Leader</li>
                    </ul>
                    </div>
                    : null
                }
            </div>
        </nav>
    );
};

export default Navbar;