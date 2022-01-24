import React from 'react';
import './Services.css'
import chess1 from '../../../../Images/chess_1.jpeg'
import chess2 from '../../../../Images/chess_2.jpeg'
import chess3 from '../../../../Images/chess_3.jpeg'
import chess4 from '../../../../Images/chess_4.jpeg'
import Title from '../../../Shared/Title/Title';

const Services = () => {
    return (
        <div className='services'>
            <Title heading="our services" mainTitle="Business Development 'As a Service'"/>
            <div className="service-cols">
                <div className="service-info">
                    <h2>Opportunity Pipeline</h2>
                    <h4>Federal, State and Local </h4>
                    <p>
                    We leave no stone unturned using d8's proprietary
                    methodology to comb the federal and state landscape, thereby
                    giving you the most highly vetted, highest fit and most 
                    winnable pipeline of opportunities. By knowing what you are 
                    going to bid 6 to 36 months in advance you increase your odds 
                    of beating your competition, reduce wasted time and maximize 
                    your investments of time and resources.
                    </p>
                </div>
                <div className="service-graphic">
                    <img src={chess1} alt="" />
                </div>
            </div>

            <div className="service-cols">
                <div className="service-graphic">
                    <img src={chess2} alt="" />
                </div>
                <div className="service-info">
                    <h2>Capture Support</h2>
                    <h4>Getting that one bid across the finish line</h4>
                    <p>
                    d8 Group exclusively represents one firm for each 
                    capture on a first-come first-serve basis. We intelligently
                    close your teaming  and capabilities gaps, identify federal
                    customer pain points, facilitate introductions to key 
                    stake holders, and more. 
                    </p>
                </div>
            </div>

            <div className="service-cols">
                <div className="service-info">
                    <h2>Small Business Graduation</h2>
                    <h4>Winning in the full an open market space</h4>
                    <p>
                        Over 80% of graduating small business fail in the 
                        full and open competitive market space. d8 Group builds your
                        next echelon of winnable opportunity pipeline, pairs you 
                        with the right teaming partners to fuel your growth, trains
                        you on how to compete in the unrestricted space and even 
                        introduces you to the next generation of small business 
                        protégé companies. 
                    </p>
                </div>
                <div className="service-graphic">
                    <img src={chess3} alt="" />
                </div>
            </div>

            <div className="service-cols">
                <div className="service-graphic">
                    <img src={chess4} alt="" />
                </div>
                <div className="service-info">
                    <h2>Superior Strategy</h2>
                    <h4>Checkmate</h4>
                    <p>
                    To win,  you need to look 4-5 steps down the chess
                    board. d8 Group helps you assess the entire federal, state and
                    local market space to determine where to make your next move. 
                    Learn who is buying exactly what you are selling within a 
                    specified period of time. Make your logical investments and 
                    action plans accordingly.  
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Services;