import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import './About.css'
import WhyUs from '../../Home/Home-Components/WhyUs/WhyUs'
import CallToAction from '../../Home/Home-Components/CallToAction/CallToAction';
import chess3 from '../../../Images/chess_3.jpeg'
import chess4 from '../../../Images/chess_4.jpeg'

const About = () => {
    return (
        <div className='about-us'>
            <PageHeading heading="Our Story And Mission" page="About"/>
            <div className="chess-cols">
                <div className="chess-info">
                    <h2>We help you win</h2>
                    <h4>The d8 Group Advantage</h4>
                    <p>
                        d8 Group was founded to help firms 
                        interested in doing business with the 
                        Federal Government find a New Way to Win 
                        by re-defining the government contracts 
                        business development and capture management process.
                    </p>
                    <p>
                        Our proven methodology and highly talented team 
                        short circuits the learning curve and win cycle 
                        for new entrants while helping existing players with 
                        their critical business development and capture needs.
                    </p>
                </div>
                <div className="chess-graphic">
                    <img src={chess3} alt="chess" />
                </div>
            </div>

            <div className="chess-cols">
                <div className="chess-graphic">
                    <img src={chess4} alt="chess" />
                </div>
                <div className="chess-info">
                    <h2>Our Best Practices</h2>
                    <h4>Getting that one bid across the finish line</h4>
                    <p>
                        d8 Group combines business development and capture best 
                        practices with innovative technology, intelligence gathering, 
                        and expert human analysis to help you find the best 
                        opportunities. Our team is even able to help find and team gap 
                        opportunities for you that are not available to the general 
                        public through the traditional RFP process.
                    </p>

                    <p>
                        You will instantly have one of the most highly skilled BD and 
                        Capture teams working exclusively for you on your accepted bids 
                        without the hiring, training, retention and overhead headaches.
                    </p>
                </div>
            </div>
            <WhyUs />
            <CallToAction />
        </div>
    );
};

export default About;