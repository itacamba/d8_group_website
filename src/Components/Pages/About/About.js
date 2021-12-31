import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import './About.css'
import WhyUs from '../../Home/Home-Components/WhyUs/WhyUs'
import CallToAction from '../../Home/Home-Components/CallToAction/CallToAction';

const About = () => {
    return (
        <div className='about-us'>
            <PageHeading heading="Our Story And Mission" content="d8 Group was founded to help firms 
            interested in doing business with the 
            Federal Government find a New Way to Win 
            by re-defining the government contracts 
            business development and capture management process. 
            Our proven methodology and highly talented team 
            short circuits the learning curve and win cycle 
            for new entrants while helping existing players with 
            their critical business development and capture needs."/>
            <WhyUs />
            <CallToAction />
        </div>
    );
};

export default About;