import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import SecondEvent from '../../../Images/event-poster.jpeg'
import './Events.css'

const Events = () => {
    return (
        <div className='events'>
            <div className="no-events">
                <h4>NO UPCOMING EVENTS</h4>
            </div>
            <PageHeading heading="d8 Group Events" page="Events"/>
            <p>Learn effective  strategies to do business at VA & DHA.
                    d8 Group brings to you key speakers who can help you 
                    navigate VA and DHA from their own personal experiences.</p>
            <div className="event-container">
                <div className="event-img">
                    <img src={SecondEvent} alt="Event Poster" />
                </div>
                <div className="event-info">
                    <h5>ONLINE EVENT</h5>
                    <h4>WEDNESDAY, NOVEMBER 3, 2021 | 12:30 - 2:00 PM EST </h4>
                    <h2>VA & DA Winning Strategies and Opportunities Event</h2>
                    <p>
                    Learn effective business strategies to do business at VA & DHA. 
                    Plus learn the HOTTEST VA and DHA opportunities!
                    <br></br>
                    Hear from 3 key speakers who can help you navigate VA and DHA 
                    from their own personal experiences from these two agencies.
                    </p>
                    <h3>Speakers:</h3>
                    <ul>
                        <li>
                        - Gregory (Greg) Giddens  | 
                        <a href="https://www.linkedin.com/in/greg-giddens/"> LinkedIn</a>
                        </li>
                        <li>
                        - George Goodwin | 
                        <a href="https://www.linkedin.com/in/george-goodwin/"> LinkedIn</a>
                        </li>
                        <li>
                        - Reeba Magulick | 
                        <a href="https://www.linkedin.com/in/reeba-magulick/"> LinkedIn</a>
                        </li>
                    </ul>
                    <h3>Topics:</h3>
                    <ul>
                        <li>
                            - Contracting processes and procedures at VA and DHA
                        </li>
                        <li>
                            - Procurement mechanisms and contracting vehicles used at VA and DHA
                        </li>
                        <li>
                            - How to navigate the VA and DHA opportunities if you are NOT a Veteran Owned company
                        </li>
                    </ul>
                </div>
            </div>
            <div className="event-container">
                <div className="event-info">
                    <h5>ONLINE EVENT</h5>
                    <h4>FRIDAY, APRIL 30, 2021 | 11:30 AM – 1:00 PM CDT </h4>
                    <h2>Winning Strategies and Opportunities at DHA and VA</h2>
                    <p>
                    Learn effective business strategies to do business at VA & DHA. 
                    Plus learn the HOTTEST VA and DHA opportunities!

                    <br></br>
                    Hear from 3 key speakers who can help you navigate VA and DHA 
                    from their own personal experiences from these two agencies.
                    </p>
                    <h3>Speakers:</h3>
                    <ul>
                        <li>
                            - Gregory (Greg) Giddens  | 
                            <a href="https://www.linkedin.com/in/greg-giddens/"> LinkedIn</a>
                        </li>
                            <li>
                            - Marion Vanzie  | 
                            <a href="https://www.linkedin.com/in/marion-vanzie-859b342b/"> LinkedIn</a>
                        </li>
                        <li>
                            - Reeba Magulick | 
                            <a href="https://www.linkedin.com/in/reeba-magulick/"> LinkedIn</a>
                        </li>
                    </ul>
                    <h3>Topics:</h3>
                    <ul>
                        <li>
                            - Contracting processes and procedures at VA and DHA
                        </li>
                        <li>
                            - Procurement mechanisms and contracting vehicles used at VA and DHA
                        </li>
                        <li>
                            - How to navigate the VA and DHA opportunities if you are NOT a Veteran Owned company
                        </li>
                    </ul>
                </div>

                <div className="event-img">
                    <img src={SecondEvent} alt="Event Poster" />
                </div>
            </div>
        </div>
    );
};

export default Events;