import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import './Podcast.css'
import '../../SharedStyles/Two-Col/TwoCol.css'
import Bobby from '../../../Images/podcast-bobby-saxon.png'

const Podcast = () => {
    return (
        <div className='podcast'>
            <PageHeading heading="The New Way to Win!" content="A Podcast by Reeba Magulick"/>
            <div className="two-col ">
                <div className="col-img">
                        <img src={Bobby} alt="Podcast Poster" />
                    </div>
                    <div className="col-info">
                        <h2>Featuring Bobby Saxon, Deputy CIO CMS</h2>
                        <p>Welcome to Season 2 of "A New Way to Win!" 
                        To kick off season 2, we are honored to speak 
                        with Retired Colonel Bobby Saxon, the Acting 
                        Director for Emergency Preparedness & Response 
                        Operations, Centers for Medicare and Medicaid 
                        Services (CMS). In this episode, Bobby 
                        discusses what you need to know about Medicare 
                        Modernization.</p>
                        <a href="https://www.youtube.com/watch?v=x-i94Hz8bzk" className='green-btn'>Watch Full Episode!</a>
                    </div>
            </div>
            <div className="two-col">
                <div className="col-img">
                        <img src={Bobby} alt="Podcast Poster" />
                    </div>
                    <div className="col-info">
                        <h2>Featuring HHS Advisor Oki Mek</h2>
                        <p>
                        In our debut podcast episode of "A New Way to Win", 
                        Oki Mek from The US Department Of Health & Human 
                        Services (HHS) talks with Reeba about the impacts 
                        of Covid 19 on agency's focus over the past few months. 
                        Oki discusses the pandemic, cyber security and his 
                        favorite technologies including Block Chain. Watch 
                        the full broadcast now!
                        </p>
                        <a href="https://www.youtube.com/watch?v=KL_2KlcEnU4" className='green-btn'>Watch Full Episode!</a>
                    </div>
            </div>
        </div>
    );
};

export default Podcast;