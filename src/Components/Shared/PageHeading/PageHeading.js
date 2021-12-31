import React from 'react';
import './PageHeading.css'
import DarkLogo from '../../../Images/logo_dark.png'


const PageHeading = ({heading, content}) => {
    return (
        <div className='page-heading'>
            <div className="dark-logo">
                <img src={DarkLogo} alt="d8 Group Dark Logo" />
            </div>
            <div className="page-heading-content">
                <h2>{heading}</h2>
                <p>{content}</p>
            </div>
        </div>
        
    );
};

export default PageHeading;