import React from 'react';
import Speaker from '../../../../Images/public_speaker.jpg'
import Title from '../../../Shared/Title/Title'

const UpcomingEvents = () => {
    return (
        <div className='upcoming-events-container'>
            <Title heading="UPCOMING EVENTS" title="STRATEGIES AND OPPORTUNITIES"/>
            
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