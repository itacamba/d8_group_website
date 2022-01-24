import React from 'react';
import Slider from "react-slick";
import './Carousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CACI from '../../../Images/client_logos/caci.png';
import Leidos from '../../../Images/client_logos/leidos.png';
import Teradata from '../../../Images/client_logos/teradata.png';

import CSRA from '../../../Images/client_logos/csra.png'
import Cure from '../../../Images/client_logos/cure.png'
import Dlh from '../../../Images/client_logos/dlh.png'
import Gdit from '../../../Images/client_logos/gdit.png'
import Govcio from '../../../Images/client_logos/govcio.png'
import Honu from '../../../Images/client_logos/honu.png'
import IronBow from '../../../Images/client_logos/ironBow.png'
import Octo from '../../../Images/client_logos/octo.png'
import SnapNurse from '../../../Images/client_logos/snapNurse.png'


const Carousel = () => {

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            }
          ]
    };

    const clientsList = [
        {
            logo: CACI,
            alt: 'CACI Logo'
        },
        {
            logo: CSRA,
            alt: 'CSRA Logo'
        },
        {
            logo: Dlh,
            alt: 'DLH Logo'
        },
        {
            logo: Leidos,
            alt: 'Leidos Logo'
        },
        {
            logo: Teradata,
            alt: 'Teradata Logo'
        },
        {
            logo: Govcio,
            alt: 'GovCIO Logo'
        },
        {
            logo: Octo,
            alt: 'OCTO Logo'
        },
        {
            logo: Gdit,
            alt: 'GDIT Logo'
        },
        {
            logo: Honu,
            alt: 'Honu Logo'
        },
        {
            logo: IronBow,
            alt: 'Iron Bow Logo'
        },
        {
            logo: Cure,
            alt: 'Cure Logo',
            id: 'tall'
        },
        {
            logo: SnapNurse,
            alt: 'Snap Nurse Logo',
            id: 'tall'
        },

    ]

    return (
        <div className='carousel-slick'>
            <Slider {...settings}>
            {    clientsList.map((client, i) =>  
                <div className={`each-slide ${client.id === 'tall'? 'tall' : null }`} key={i} >
                    <img src={client.logo} alt={client.alt} width="100%"/>
                </div>
            )}
            </Slider>
        </div>
    );
};

export default Carousel;