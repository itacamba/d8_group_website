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

const Leadership = () => {

    const leaders = [
        {
            name: 'Reeba Magulick',
            title: 'Senior Founder',
            url: '/'
        },
        {
            name: 'William Kerr',
            title: 'Senior Capture Strategist',
            url: '/'
        },
        {
            name: 'Gregg Greenfield',
            title: 'Chief Growth Strategist',
            url: '/'
        },
        {
            name: 'TJ Magulick',
            title: 'Principal of Business Operations',
            url: '/'
        },
        {
            name: 'Adam Ball',
            title: 'Director of Strategic Growth',
            url: '/'
        },
        {
            name: 'Sarah Malone',
            title: 'Business Intelligence/ Capture Analyst',
            url: '/'
        },
    ]
    return (
        <div className="leadership">
            <PageHeading heading="Group Leadership" content="We hold ourselves to the highest standards in the industry. Think of us as your special forces unit. We are ready to support your existing team in any way they need or go to battle on your behalf."/>
            <Title heading="LEADERS AND ADVISORS" />
            <div className="flex-gallery">
                {
                    leaders.map((leader, i) => 
                    <div className="gallery-card" key={i}>
                        <div className="gallery-card-img">
                            {
                                i === 0? 
                                <img src={Reeba} alt="Reeba Magulick" />
                                : i === 1?
                                <img src={Bill} alt="William Kerr" />
                                : i === 2? 
                                <img src={Gregg} alt="Gregg Greenfield" />
                                : i === 3?
                                <img src={Tj} alt="TJ Magilick" />
                                : i === 4?
                                <img src={Adam} alt="Adam Ball" />
                                : i === 5?
                                <img src={Sarah} alt="Sarah Malone" />
                                : null
                            }
                        </div>
                        <h3>{leader.name}</h3>
                        <h3>{leader.title}</h3>
                        <a href={leader.url}>
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Leadership;