import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import './Clients.css'
import '../../SharedStyles/FlexGallery/FlexGallery.css'
// top clients
import Title from '../../Shared/Title/Title';
import CACI from '../../../Images/client_logos/caci.png'
import CSRA from '../../../Images/client_logos/csra.png'
import Leidos from '../../../Images/client_logos/leidos.png'
import Cure from '../../../Images/client_logos/cure.png'
import Dlh from '../../../Images/client_logos/dlh.png'
import Gdit from '../../../Images/client_logos/gdit.png'
import Govcio from '../../../Images/client_logos/govcio.png'
import Honu from '../../../Images/client_logos/honu.png'
import IronBow from '../../../Images/client_logos/ironBow.png'
import Octo from '../../../Images/client_logos/octo.png'
import SnapNurse from '../../../Images/client_logos/snapNurse.png'
import Teradata from '../../../Images/client_logos/teradata.png'

// secondary clients
import Zolon from '../../../Images/client_logos/zolon.png'
import Vmd from '../../../Images/client_logos/vmd.png'
import Vital from '../../../Images/client_logos/vital.png'
import Veloz from '../../../Images/client_logos/veloz.png'
import Unis from '../../../Images/client_logos/unissant.png'
import Triple from '../../../Images/client_logos/triple.png'
import Synap from '../../../Images/client_logos/synap.png'
import SilverFern from '../../../Images/client_logos/silverFern.png'
import RpPro from '../../../Images/client_logos/rpPro.png'
import Rally from '../../../Images/client_logos/rallyPoint.png'
import Qbe from '../../../Images/client_logos/Qbe.png'
import Pumex from '../../../Images/client_logos/pumex.png'
import Panum from '../../../Images/client_logos/panum.png'
import Nvr from '../../../Images/client_logos/nvr.png'
import NVE from '../../../Images/client_logos/nve.png'
import Int from '../../../Images/client_logos/int.png'
import Innovate from '../../../Images/client_logos/innovate.png'
import IndraSoft from '../../../Images/client_logos/indrasoft.png'




const Clients = () => {

    const clientsList = [
        {
            img: CACI,
            alt: 'CACI Logo white'
        },
        {
            img: CSRA,
            alt: 'CSRA Logo white'
        },
        {
            img: Dlh,
            alt: 'DLH Logo white'
        },
        {
            img: Teradata,
            alt: 'Teradata Logo white'
        },
        {
            img: Leidos,
            alt: 'Leidos Logo white'
        },
        {
            img: Govcio,
            alt: 'GovCIO Logo white'
        },
        {
            img: Gdit,
            alt: 'GDIT Logo white'
        },
        {
            img: Honu,
            alt: 'Honu Services Logo White'
        }, 
        {
            img: IronBow,
            alt: 'Iron Bow Logo white'
        },
        {
            img: Octo,
            alt: 'OCTO Logo white'
        },
        {
            img: SnapNurse,
            alt: 'Snap Nurse Logo white'
        },
        {
            img: Cure,
            alt: 'CURE Logo white'
        },
        {
            img: Zolon,
            alt: 'Zolon Logo white'
        },
        {
            img: Vmd,
            alt: 'VMD Logo white'
        },
        {
            img: Vital,
            alt: 'Vital Logo white'
        },
        {
            img: Veloz,
            alt: 'Veloz Logo white'
        },
        {
            img: Unis,
            alt: 'Unissant Logo white'
        },
        {
            img: Triple,
            alt: 'Triple Cyber Logo white'
        },
        {
            img: Synap,
            alt: 'SynapOne Logo white'
        },
        {
            img: SilverFern,
            alt: 'SilverFern Logo white'
        },
        {
            img: RpPro,
            alt: 'Rp Pro Logo white'
        },
        {
            img: Rally,
            alt: 'Rally Point Logo white'
        },
        {
            img: Qbe,
            alt: 'QBE Logo white'
        },
        {
            img: Pumex,
            alt: 'Pumex Logo white'
        },
        {
            img: Panum,
            alt: 'Panum Logo white'
        },
        {
            img: Nvr,
            alt: 'NVR Logo white'
        },
        {
            img: NVE,
            alt: 'NVE INC Logo white'
        },
        {
            img: Int,
            alt: 'Int Logo white'
        },
        {
            img: Innovate,
            alt: 'Innovate Logo white'
        },
        {
            img: IndraSoft,
            alt: 'Indra Soft Logo white'
        },
    ]
    return (
        <div className='clients'>
            <PageHeading heading="Our Trusted Clients" content="Below we present a list with our most trusted  over the past 5 years."/>
            <Title heading="OUR CLIENTS" subtitle="d8 Group's Trusted Clients"/>
            <div className="flex-gallery">
                {
                    clientsList.map((client, i) => 
                        <div className='gallery-card' key={i}>
                            <div className="gallery-card-img">
                                <img src={client.img} alt={client.alt} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Clients;