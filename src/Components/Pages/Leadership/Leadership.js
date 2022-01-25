import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import './Leadership.css'
import '../../SharedStyles/FlexGallery/FlexGallery.css'
import Title from '../../Shared/Title/Title'
import Reeba from '../../../Images/reeba.jpg';
import Bill from '../../../Images/bill.jpeg';
import Gregg from '../../../Images/gregg.jpeg';
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




const Leadership = () => {

    const leaders = [
        {
            id: 1,
            name: 'Reeba Magulick',
            title: 'Senior Founder',
            url: 'https://www.linkedin.com/in/reeba-magulick/'
        },
        {  
            id: 2,
            name: 'William Kerr',
            title: 'Senior Capture Strategist',
            url: 'https://www.linkedin.com/in/william-kerr-4a975258/'
        },
        {
            id: 3,
            name: 'Gregg Greenfield',
            title: 'Chief Growth Strategist',
            url: 'https://www.linkedin.com/in/gregggreenfield/'
        },
        {
            id: 4,
            name: 'TJ Magulick',
            title: 'Principal of Business Operations',
            url: 'https://www.linkedin.com/in/tj-magulick-7379521/'
        },
        {
            id: 5,
            name: 'Adam Ball',
            title: 'Director of Strategic Growth',
            url: 'https://www.linkedin.com/in/adam-ball-12062952/'
        },
        {
            id: 6,
            name: 'Sarah Malone',
            title: 'Business Intelligence/ Capture Analyst',
            url: 'https://www.linkedin.com/in/sarah-malone-244406211/'
        },
        // {
        //     id: 7,
        //     name: 'Carla Sahagun',
        //     title: 'Business Intelligence/ Capture Analyst',
        //     url: '/'
        // },
        {
            id: 8,
            name: 'Dr. Ellen Embrey',
            title: 'Advisor: Health Affairs',
            url: 'https://www.linkedin.com/in/ellen-embrey-06389920/'
        },
        {
            id: 9,
            name: 'Dr. Keith Salzman',
            title: 'Chief Medical Information Officer',
            url: 'https://www.linkedin.com/in/klsalzman/'
        },
        {
            id: 10,
            name: 'Rohan Patel',
            title: 'Lead Associate',
            url: 'https://www.linkedin.com/in/rohan-patel-606430111/'
        },
        {
            id: 11,
            name: 'Eric Gregory',
            title: 'Advisor: Proposal & Capture',
            url: 'https://www.linkedin.com/in/egregory1/'
        },
        {
            id: 12,
            name: 'Amy Strouse',
            title: 'Advisor: Strategy',
            url: 'https://www.linkedin.com/in/amy-strouse-1938b54/'
        },
        {
            id: 13,
            name: 'Seth Robbins, Esq',
            title: 'Subject Matter Expert',
            url: 'https://www.linkedin.com/in/sethrobbinsattorney/'
        },
        {
            id: 14,
            name: 'Joel Henson',
            title: 'Advisor: Big Win Capture',
            url: 'https://www.linkedin.com/in/joelhenson/'
        },
        {
            id: 15,
            name: 'Toby Gouker, PhD',
            title: 'Advisor: Cyber Security',
            url: 'https://www.linkedin.com/in/toby-gouker-phd-chisl-gslc-cism-cpem-5285901/'
        },
        {
            id: 16,
            name: 'Tom Giroir',
            title: 'Subject Matter Expert',
            url: 'https://www.linkedin.com/in/tomgiroir/'
        },
        {
            id: 17,
            name: 'Jason Cullum',
            title: 'Advisor: Healthcare IT',
            url: 'https://www.linkedin.com/in/jasoncullum/'
        },
        {
            id: 18,
            name: 'Dr. Les McFarling',
            title: 'Mental Health Expert',
            url: 'https://www.linkedin.com/in/les-mcfarling-84a598140/'
        },
        {
            id: 19,
            name: 'Ken Allgood',
            title: 'Federal Health Subject Matter Expert',
            url: 'https://www.linkedin.com/in/kenallgood/'
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
                            {
                                leader.id === 1? 
                                <img src={Reeba} alt="Reeba Magulick" />
                                : leader.id === 2?
                                <img src={Bill} alt="William Kerr" />
                                : leader.id === 3? 
                                <img src={Gregg} alt="Gregg Greenfield" />
                                : leader.id === 4?
                                <img src={Tj} alt="TJ Magilick" />
                                : leader.id === 5?
                                <img src={Adam} alt="Adam Ball" />
                                : leader.id === 6?
                                <img src={Sarah} alt="Sarah Malone" />
                                : leader.id === 8?
                                <img src={Ellen} alt="Dr. Ellen Embrey" />
                                : leader.id === 9?
                                <img src={Keith} alt="Dr. Keith Salzman" />
                                : leader.id === 10?
                                <img src={Rohan} alt="Rohan Patel" />
                                : leader.id === 11?
                                <img src={Eric} alt="Eric Gregory" />
                                : leader.id === 12?
                                <img src={Amy} alt="Amy Strouse" />
                                : leader.id === 13?
                                <img src={Seth} alt="Seth Robbins, Esq" />
                                : leader.id === 14?
                                <img src={Joel} alt="Joel Henson" />
                                : leader.id === 15?
                                <img src={Toby} alt="Toby Gouker, PhD" />
                                : leader.id === 16?
                                <img src={Tom} alt="Tom Giroir" />
                                : leader.id === 17?
                                <img src={Jason} alt="Jason Cullum" />
                                : leader.id === 18?
                                <img src={Les} alt="Dr. Les McFarling" />
                                : leader.id === 19?
                                <img src={Ken} alt="Ken Allgood" />
                                : null
                            }
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