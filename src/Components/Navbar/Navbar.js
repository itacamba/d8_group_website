import React, { useState } from 'react';
import Logo from '../../Images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [dina, setDina] = useState('hide')

    
    const toggleOpen = () => {
        const currentState = !open
        if(!currentState){
            console.log('closed');
            setDina('other')
        } else {
            setDina('hide')
        }
        setOpen(currentState) 
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
                    <div className={open? "menu" : dina}>
                        <div className="x-icon" onClick={toggleOpen}>
                            <div className="x-line"></div>
                            <div className="x-line"></div>
                        </div>
                        <ul>
                            <li>Leader</li>
                            <li>Leader</li>
                            <li>Leader</li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
};

export default Navbar;