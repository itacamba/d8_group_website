import React from 'react';
import "./Home.css"
import Chessboard from '../../Images/chessboard.png'

const Home = () => {
    return (
        <div id="home">
            <main>
                <div className="main-content">
                    <h2>The New Way to Win</h2>
                    <h3>Win Federal Government Contracts</h3>
                    <p>d8 Group helps you assess the entire federal, 
                    state and local market space to determine where 
                    to make your next move. Learn who is buying exactly 
                    what you are selling within a specified period of time.</p>
                </div>
                <div className="gradient-right-light"></div>
                <div className="gradient-left-light"></div>
            </main>
            <div className="chessboard-img">
                <img src={Chessboard} alt="chessboard and queen" />
            </div>
            <div className="test"></div>
        </div>
    );
};

export default Home;