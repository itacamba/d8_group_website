import React from 'react';
import "./Home.css"
import Chessboard from '../../Images/chessboard.png'
// import CarouselHorizontal from './Home-Components/CarouselHorizontal/CarouselHorizontal';
import CallToAction from './Home-Components/CallToAction/CallToAction';
import UpcomingEvents from './Home-Components/UpcomingEvents/UpcomingEvents';
import WhyUs from './Home-Components/WhyUs/WhyUs';
// import Title from '../Shared/Title/Title'
import Founder from './Home-Components/Founder/Founder';
import Carousel from '../Shared/Carousel/Carousel';
import Services from './Home-Components/Services/Services';

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
                <div className="gradient-bottom"></div>
                <div className="chessboard-img">
                    <img src={Chessboard} alt="chessboard and queen" />
                </div>
            </main>
            <Carousel />
            <Services />
            {/* <div className="services">
                <Title heading="our services" mainTitle="Business development as a service"/>
                <CarouselHorizontal/>
            </div> */}
            <CallToAction/>
            <Founder/>
            <WhyUs/>
            <UpcomingEvents/>

        </div>
    );
};

export default Home;