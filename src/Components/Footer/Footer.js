import React from 'react';
import Logo from '../../Images/logo.png'
import './Footer.css'

const Footer = () => {
    const date =  new Date().getFullYear();

    const socialMedia = [
        {
            iconClass: 'fab fa-linkedin',
            url: 'https://www.linkedin.com/company/d8group/' 
        },
        {
            iconClass: 'fab fa-twitter-square',
            url: 'https://twitter.com/group_d8' 
        },
        {
            iconClass: 'fab fa-youtube-square',
            url: 'https://www.youtube.com/channel/UCOAC4PCTkdNHTYt5RT0TnOA' 
        },
        {
            iconClass: 'fab fa-instagram-square',
            url: 'https://www.instagram.com/d8group/' 
        },
        {
            iconClass: 'fab fa-facebook-square',
            url: 'https://www.facebook.com/d8group' 
        },
    ]

    const menuLinks = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Services',
            url: '/' // fix to scroll to element
        },
        {
            name: 'Contact Us',
            url: '/contact'
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
            name: 'About Us',
            url: '/about'
        },
    ]
    return (
        <div className='footer'>
            <div className="footer-menu">
                <div>
                <ul>
                    {
                    menuLinks.map((menuLink, i) => 
                        <li key={i}>
                            <a href={menuLink.url}>{menuLink.name}</a>
                        </li>
                    )}
                </ul>

                <div className="social-media">
                {
                    socialMedia.map((socialLink,i) => 
                    <a href={socialLink.url} key={i} target="_blank" rel="noreferrer">
                        <i className={socialLink.iconClass}></i>
                    </a>
                    )
                }
                </div>
                </div>
            </div>
            <div className="footer-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="copyright">
                <p>Copyright © {date} d8 Group LLC</p>
            </div>
        </div>
    );
};

export default Footer;