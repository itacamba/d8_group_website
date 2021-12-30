import React from 'react';
import CarouselCard from './CarouselHorizontal/CarouselComponents/CarouselCard';

const CarouselHorizontal = () => {

    const services = [
        {
            title: 'OPPORTUNITY PIPELINE',
            subtitle: 'Federal, State and Local',
            content: `We leave no stone unturned using d8's proprietary
            methodology to comb the federal and state landscape, thereby
            giving you the most highly vetted, highest fit and most 
            winnable pipeline of opportunities. By knowing what you are 
            going to bid 6 to 36 months in advance you increase your odds 
            of beating your competition, reduce wasted time and maximize 
            your investments of time and resources.`,
            readMore: true,
        },
        {
            title: 'CAPTURE SUPPORT',
            subtitle: 'Getting that one bid across the finish line',
            content: `d8 Group exclusively represents one firm for each 
            capture on a first-come first-serve basis. We intelligently
            close your teaming  and capabilities gaps, identify federal
            customer pain points, facilitate introductions to key 
            stake holders, and more.`,
            readMore: false,
        },
        {
            title: 'SB GRADUATION',
            subtitle: 'Winning in the full an open market space',
            content: `Over 80% of graduating small business fail in the 
            full and open competitive market space. d8 Group builds your
            next echelon of winnable opportunity pipeline, pairs you 
            with the right teaming partners to fuel your growth, trains
            you on how to compete in the unrestricted space and even 
            introduces you to the next generation of small business 
            protégé companies.`,
            readMore: false,
        },
        {
            title: 'STRATEGY',
            subtitle: 'Checkmate',
            content: `To win,  you need to look 4-5 steps down the chess
            board. d8 Group helps you assess the entire federal, state and
            local market space to determine where to make your next move. 
            Learn who is buying exactly what you are selling within a 
            specified period of time. Make your logical investments and 
            action plans accordingly. `,
            readMore: false,
        },
    ]

    return (
        <div className="horizontal-carousel">
            <div className="arrow-right"></div>
        {
            services.map((service, i) => <CarouselCard key={i} service={service} i={i}/>
                )
        }
        </div>
    );
};

export default CarouselHorizontal;