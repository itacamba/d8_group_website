import React from 'react';
import '../Navbar.css'

const XIcon = ({menuAnimation, toggleOpen}) => {
    return (
    <div className="x-icon" onClick={toggleOpen}> 
        <div className={`x-line ${menuAnimation}`}></div>
        <div className={`x-line ${menuAnimation}`}></div>
    </div>
    );
};

export default XIcon;