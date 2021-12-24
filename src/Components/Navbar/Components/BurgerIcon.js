import React from 'react';
import '../Navbar.css'

const BurgerIcon = ({open, toggleOpen}) => {
    
    return (
        <div className={open? 'menu-icon animate' :'menu-icon'} onClick={() => toggleOpen()}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
        </div>
    );
};

export default BurgerIcon;