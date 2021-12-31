import React from 'react';
import Money from '../../../../Images/money.jpeg';
import Experience from '../../../../Images/experience.jpeg';
import Network from '../../../../Images/networking.jpeg';
import Savings from '../../../../Images/saving.jpeg';
import BusinessIntel from '../../../../Images/business_intel.jpeg';
import '../../../SharedStyles/FlexGallery/FlexGallery.css'
import Title from '../../../Shared/Title/Title';

const WhyUs = () => {
    const skills = [
        {
            title: 'Total $5B',
            content: `Total Federal bids our team members 
            have participated in and helped win in 
            the past 3 years.`,
        },
        {
            title: 'Experience',
            content: `Best in class BD & Capture Specialists
            without worrying about hiring and turnover.`,
        },
        {
            title: 'Network',
            content: `Unprecedented access to key connections
            allowing you to bid on any opportunity`,
        },
        {
            title: 'Savings',
            content: `$327K average yearly savings per client
            utilizing business development and capture support.`,
        },
        {
            title: 'Best Intel',
            content: `Relevant industry, event & agency intel
            reports with contextual analysis.`,
        },

    ]



    return (
        <div className='why-us'>
           <Title heading="WHY CHOOSE US" />
            <div className="flex-gallery">
                {
                    skills.map((skill, i) => 
                    <div className="gallery-card" key={i}>
                        <div className="separator"></div>
                        <div className="gallery-card-img">
                            {
                                i === 0? 
                                <img src={Money} alt="Money Saving " />
                                : i === 1?
                                <img src={Experience} alt="Experience" />
                                : i === 2? 
                                <img src={Network} alt="Networking " />
                                : i === 3?
                                <img src={Savings} alt="Savings" />
                                : i === 4?
                                <img src={BusinessIntel} alt="Business Intelligence " />
                                : null
                            }
                        </div>
                        <h2><span>0{i + 1}</span>{skill.title}</h2>
                        <p>{skill.content}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhyUs;