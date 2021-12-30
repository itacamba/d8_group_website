import React from 'react';
import "./Home.css"
import Chessboard from '../../Images/chessboard.png'
import CarouselHorizontal from './Home-Components/CarouselHorizontal';
import CallToAction from './Home-Components/CallToAction/CallToAction';

const Home = () => {

    return (
        <div id="home">
            <main>
                <div className="main-content">
                    <h2>The New Way to Win</h2>
                    <h3>Federal Government Contracts</h3>
                    <p>d8 Group helps you assess the entire federal, 
                    state and local market space to determine
                    who is buying exactly what you are selling.</p>
                </div>
                <div className="gradient-bottom"></div>
                <div className="chessboard-img">
                        <img src={Chessboard} alt="chessboard and queen" />
                </div>
            </main>

            <div className="services">
                <div className="title-section">
                    <h4>Our Services</h4>
                    <h1>BUSINESS DEVELOPMENT AS A SERVICE</h1>
                </div>
                <CarouselHorizontal/>
            </div>

            <CallToAction/>

        </div>
    );
};

export default Home;