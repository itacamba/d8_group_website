import React, { useState } from 'react';
import Logo from '../../Images/logo.png'
import BurgerIcon from './Components/BurgerIcon';
import XIcon from './Components/XIcon';
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const pages = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Leadership',
            url: '/leadership'
        },
        {
            name: 'Events',
            url: '/events'
        },
        {
            name: 'Podcast',
            url: '/podcast'
        },
        {
            name: 'Contact Us',
            url: '/contact'
        },
    ]

    const [open, setOpen] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState('hide')
    
    const toggleOpen = () => {             
        const currentState = !open
        if(currentState){
            setMenuAnimation('show')
        } else {
            setMenuAnimation('disappear')
        }
        setOpen(currentState) 
    }

    return (
        <nav id="nav">
            <div className="logo-container">
                <img className="logo-img" src={Logo} alt="d8 group logo" />
            </div>
            <div className="menu-container">
                <BurgerIcon open={open} toggleOpen={toggleOpen}/>
                <div id="menu" className={`menu ${menuAnimation}`}>
                    <XIcon toggleOpen={toggleOpen} menuAnimation={menuAnimation}/>
                    <h2>The New Way to Win</h2>
                    <ul>
                        {
                            pages.map((page,i) => <li key={i}>
                                <Link to={page.url} onClick={toggleOpen}>
                                    {page.name}
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;