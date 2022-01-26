import React from 'react';
import "./Home.css"
import CallToAction from './Home-Components/CallToAction/CallToAction';
import UpcomingEvents from './Home-Components/UpcomingEvents/UpcomingEvents';
import WhyUs from './Home-Components/WhyUs/WhyUs';
import Founder from './Home-Components/Founder/Founder';
import Carousel from '../Shared/Carousel/Carousel';
import Services from './Home-Components/Services/Services';
import Title from '../Shared/Title/Title';
import PodcastTeaser from '../../Images/podcast-bobby-saxon.png';

const Home = () => {

    return (
        <div id="home">
            <main>
                <div className="main-content">
                    <h2>The New Way to Win</h2>
                    <h3>Federal Government Contracts</h3>
                    <p>d8 Group helps you assess the entire federal, 
                    state and local market space to determine
                    who is buying exactly what you are selling and 
                    positions you to ethically win the contract award.
                    
                    </p>
                    <a href="/contact" className="action-btn">Get Started</a>
                </div>
            </main>
            <div className="home-clients">
                <Title heading="some of our clients" /> 
                <Carousel />
            </div>
            <Services />
            <CallToAction/>
            <div className="home-podcast">
                <Title heading="podcast season 2" title="The New Way To Win"/>
                <div className="two-col">
                        <div className="col">
                            <img src={PodcastTeaser} alt="Bobby Saxon and Reeba Magulick" />
                        </div>
                        <div className="col-info">
                            <h2>Featuring Bobby Saxon, Deputy CIO CMS</h2>
                            <p>Welcome to Season 2 of "A New Way to Win!" To kick off season 2, we are honored to speak with Retired Colonel Bobby Saxon, the Acting Director for Emergency Preparedness & Response Operations, Centers for Medicare and Medicaid Services (CMS). In this episode, Bobby discusses what you need to know about Medicare Modernization.</p>
                            
                            <div className="podcast-btns">
                                <a href='https://www.youtube.com/watch?v=x-i94Hz8bzk' className='action-btn'>Watch Now!</a>
                                <a href='/podcast' className='action-btn'>All Episodes</a>
                            </div>
                        </div>
                    </div>
            </div>
            <Founder/>
            <WhyUs/>
            <UpcomingEvents/>

        </div>
    );
};

export default Home;