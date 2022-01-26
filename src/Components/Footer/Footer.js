import React from 'react';
import Logo from '../../Images/logo.png'
import d8 from '../../Images/d8_graphic.png'
import './Footer.css'

const Footer = () => {
    const date =  new Date().getFullYear();

    const socialMedia = [
        {
            iconClass: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/company/d8group/' 
        },
        {
            iconClass: 'fab fa-twitter',
            url: 'https://twitter.com/group_d8' 
        },
        {
            iconClass: 'fab fa-youtube',
            url: 'https://www.youtube.com/channel/UCOAC4PCTkdNHTYt5RT0TnOA' 
        },
        {
            iconClass: 'fab fa-instagram',
            url: 'https://www.instagram.com/d8group/' 
        },
        {
            iconClass: 'fab fa-facebook-f',
            url: 'https://www.facebook.com/d8group' 
        },
    ]

    
    return (
        <div className="footer">
            <div className="social-media">
                {
                     socialMedia.map((socialLink,i) =>
                     <div className='circle' key={i}>
                        <a href={socialLink.url}  target="_blank" rel="noreferrer">
                            <i className={socialLink.iconClass}></i>
                        </a>
                     </div>
                     )
                }
            </div>
            <div className="footer-cols">
                <div className="foot-col d8-graphic">
                    <img src={d8} alt="d8 Group" />
                </div>
                <div className="foot-col">
                    <div className="footer-menu">
                        <div>
                            <p className='footer-menu-title'>Pages</p>
                            <a href="/clients">Clients</a>
                            <a href="/events">Events</a>
                            <a href="/contact">Contact Us</a>
                        </div>
                        <div>
                            <p className='footer-menu-title'>Company</p>
                            <a href="/">Home</a>
                            <a href="/leadership">Leadership</a>
                            <a href="/about">About</a>
                            <a href="/podcast">Podcast</a>
                        </div>
                        <div>
                            <p className='footer-menu-title'>Get in Touch</p>
                            <div className='footer-info'>
                                <i className="fas fa-phone-alt"></i>
                                <p>1-833-384-7687</p>
                            </div>
                            <div className='footer-info'>
                                <i className="fas fa-envelope"></i>
                                <p>ops@d8group.com</p>
                            </div>
                            <div className='footer-info'>
                                <i className="fas fa-map-marked-alt"></i>
                                <p>11921 Freedom Dr.<br></br>
                                    Suite 550<br></br>
                                    Reston, VA 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-logo">
                        <img src={Logo} alt="d8 Group Logo" />
                    </div>
                    <div className="copyright">
                         <p>Copyright © {date} d8 Group LLC</p>
                    </div>
                </div>
            </div>
            <div className="footer-slogan">
                <h3>The New Way to Win</h3>
            </div>
        </div>
    );
};

export default Footer;