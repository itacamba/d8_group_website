import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import './Leadership.css'
import '../../SharedStyles/FlexGallery/FlexGallery.css'
import Title from '../../Shared/Title/Title'
import Reeba from '../../../Images/reeba.jpg';
import Bill from '../../../Images/bill.jpeg';
import Hayden from '../../../Images/hayden_pond.png';
import Tj from '../../../Images/tj.jpeg';
import Adam from '../../../Images/adam_ball.jpeg';
import Sarah from '../../../Images/sarah_malone.jpeg';
import Ellen from '../../../Images/ellen-embrey.jpeg';
import Keith from '../../../Images/keith_salzman.jpeg';
import Rohan from '../../../Images/rohan-patel.jpeg';
import Eric from '../../../Images/eric-gregory.jpeg';
import Amy from '../../../Images/amy-strouse.jpeg';
import Seth from '../../../Images/seth_robbins.jpeg';
import Joel from '../../../Images/joel_henson.jpeg';
import Toby from '../../../Images/toby_gouker.jpeg';
import Tom from '../../../Images/tom_giroir.jpeg';
import Jason from '../../../Images/jason_cullum.jpeg';
import Les from '../../../Images/les_mcfarling.jpeg';
import Ken from '../../../Images/ken_algood.jpeg';
import Robin from '../../../Images/robin_kelly.jpg';
import Carla from '../../../Images/carla_sah.jpg';




const Leadership = () => {

    const leaders = [
        {
            name: 'Reeba Magulick',
            title: 'Founding Partner',
            url: 'https://www.linkedin.com/in/reeba-magulick/',
            img: Reeba,
        },
        {  
            name: 'William Kerr',
            title: 'Director of Strategic Growth',
            url: 'https://www.linkedin.com/in/william-kerr-4a975258/',
            img: Bill,
        },
        {
            name: 'Hayden Pond',
            title: 'Director of Strategic Growth',
            url: 'https://www.linkedin.com/in/hayden-pond-2b7aa199/',
            img: Hayden
        },
        {
            name: 'Adam Ball',
            title: 'Director of Strategic Growth',
            url: 'https://www.linkedin.com/in/adam-ball-12062952/',
            img: Adam,
        },
        {
            name: 'TJ Magulick',
            title: 'Principal of Business Operations',
            url: 'https://www.linkedin.com/in/tj-magulick-7379521/',
            img: Tj
        },
        {
            name: 'Sarah Malone',
            title: 'Business Intelligence/ Capture Analyst',
            url: 'https://www.linkedin.com/in/sarah-malone-244406211/',
            img: Sarah
        },
        {
            name: 'Carla Sahagun',
            title: 'Business Intelligence/ Capture Analyst',
            url: 'https://www.linkedin.com/in/carla-sahagun/',
            img: Carla
        },
        {
            name: 'Robin Kelly',
            title: 'Digital Marketing Strategist',
            url: 'https://www.linkedin.com/in/robin-kelly/',
            img: Robin
        },
        {
            name: 'Dr. Ellen Embrey',
            title: 'Advisor: Health Affairs',
            url: 'https://www.linkedin.com/in/ellen-embrey-06389920/',
            img: Ellen
        },
        {
            name: 'Dr. Keith Salzman',
            title: 'Chief Medical Information Officer',
            url: 'https://www.linkedin.com/in/klsalzman/',
            img: Keith,
        },
        {
            name: 'Rohan Patel',
            title: 'Lead Associate',
            url: 'https://www.linkedin.com/in/rohan-patel-606430111/',
            img: Rohan
        },
        {
            name: 'Eric Gregory',
            title: 'Advisor: Proposal & Capture',
            url: 'https://www.linkedin.com/in/egregory1/',
            img: Eric
        },
        {
            name: 'Amy Strouse',
            title: 'Advisor: Strategy',
            url: 'https://www.linkedin.com/in/amy-strouse-1938b54/',
            img: Amy
        },
        {
            name: 'Seth Robbins, Esq',
            title: 'Subject Matter Expert',
            url: 'https://www.linkedin.com/in/sethrobbinsattorney/',
            img: Seth
        },
        {
            name: 'Joel Henson',
            title: 'Advisor: Big Win Capture',
            url: 'https://www.linkedin.com/in/joelhenson/',
            img: Joel
        },
        {
            name: 'Toby Gouker, PhD',
            title: 'Advisor: Cyber Security',
            url: 'https://www.linkedin.com/in/toby-gouker-phd-chisl-gslc-cism-cpem-5285901/',
            img: Toby
        },
        {
            name: 'Tom Giroir',
            title: 'Subject Matter Expert',
            url: 'https://www.linkedin.com/in/tomgiroir/',
            img: Tom
        },
        {
            name: 'Jason Cullum',
            title: 'Advisor: Healthcare IT',
            url: 'https://www.linkedin.com/in/jasoncullum/',
            img: Jason
        },
        {
            name: 'Dr. Les McFarling',
            title: 'Mental Health Expert',
            url: 'https://www.linkedin.com/in/les-mcfarling-84a598140/',
            img: Les
        },
        {
            name: 'Ken Allgood',
            title: 'Federal Health Subject Matter Expert',
            url: 'https://www.linkedin.com/in/kenallgood/',
            img: Ken
        }
    ]
    return (
        <div className="leadership">
            <PageHeading heading="d8 Group Leadership" page="Leadership"/>
            <Title heading="leaders and advisors" title="The d8 Group team" />
            <div className="flex-gallery">
                {
                    leaders.map((leader, i) => 
                    <div className="gallery-card" key={i}>
                        <div className="gallery-card-img">
                            <img src={leader.img} alt={leader.name} />
                        </div>
                        <h3>{leader.name}</h3>
                        <h3>{leader.title}</h3>
                        <a href={leader.url} target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Leadership;