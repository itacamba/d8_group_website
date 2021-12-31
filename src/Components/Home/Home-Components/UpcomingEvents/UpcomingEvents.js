import React from 'react';
import Speaker from '../../../../Images/public_speaker.jpg'

const UpcomingEvents = () => {
    return (
        <div className='upcoming-events-container'>
            <div className="title-section">
                <h4>UPCOMING EVENTS</h4>
                <h2>STRATEGIES AND OPPORTUNITIES</h2>
            </div>

            <div className="flex-container">
                <div className="col-img">
                    <img src={Speaker} alt="" />
                    <div className="absolute-text">
                        <h2>Learn from key speakers in the federal arena 
                        by attending our strategies and opportunities events.</h2>
                        <a href="/events" >SEE UPCOMING EVENTS</a>
                    </div>
                </div>
                <div className="col-product">
                    <h2>Learn From The Experts</h2>
                    <p>Learn from key speakers in the federal arena 
                    by attending our strategies and opportunities events.</p>
                    <a href="/events" className="main-button">SEE UPCOMING EVENTS</a>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;