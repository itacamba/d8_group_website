import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import './Podcast.css'
import '../../SharedStyles/Two-Col/TwoCol.css'
import Bobby from '../../../Images/podcast-bobby-saxon.png'
import Oki from '../../../Images/podcast_oki.png'
import Angela from '../../../Images/podcast_angela_bell.png'
import JoseA from '../../../Images/podcast_jose_arrieta.png'
import Nichol from '../../../Images/podcast_nichol_case.png'
import Jason from '../../../Images/podcast_jason_cullum.png'
import Theresa from '../../../Images/podcast_theresa_holder.png'



const Podcast = () => {

    const guestList = [
        {
            img: Bobby,
            alt: 'Bobby Saxon',
            title: 'Featuring Bobby Saxon, Deputy CIO CMS',
            info: `Welcome to Season 2 of "A New Way to Win!" 
            To kick off season 2, we are honored to speak 
            with Retired Colonel Bobby Saxon, the Acting 
            Director for Emergency Preparedness & Response 
            Operations, Centers for Medicare and Medicaid 
            Services (CMS). In this episode, Bobby 
            discusses what you need to know about Medicare 
            Modernization.`,
            link: 'https://www.youtube.com/watch?v=x-i94Hz8bzk'
        },
        {
            img: Oki,
            alt: 'Oki Mek',
            title: 'Featuring HHS Advisor Oki Mek',
            info: `In our debut podcast episode of "A New Way to Win", 
            Oki Mek from The US Department Of Health & Human 
            Services (HHS) talks with Reeba about the impacts 
            of Covid 19 on agency's focus over the past few months. 
            Oki discusses the pandemic, cyber security and his 
            favorite technologies including Block Chain. Watch 
            the full broadcast now!`,
            link: 'https://www.youtube.com/watch?v=KL_2KlcEnU4'
        },
        {
            img: Angela,
            alt: 'Angela Bell',
            title: 'Featuring Angela Bell, from the Department of Commerce',
            info: `In this episode of "A New Way to Win" with Reeba Magulick,
            Angela Bell from the Department of Commerce shares important 
            tips on how to keep your government business from stagnating.`,
            link: 'https://www.youtube.com/watch?v=_0ckmW2G5RU'
        },
        {
            img: JoseA,
            alt: 'Jose Arrieta',
            title: 'Featuring Jose Arrieta, CIO of the Dept. of Health & Human Services',
            info: `In this full podcast episode of "A New Way to Win" 
            with Reeba Magulick, Jose Arrieta, CIO of the Dept. of Health
            & Human Services. Jose discusses insights into doing business 
            with HHS.`,
            link: 'https://www.youtube.com/watch?v=JTIcx_bBBes'
        },
        {
            img: Nichol,
            alt: 'Nichol Case',
            title: 'Featuring Vice President of Growth for Military Health and Veterans Affairs at Leidos',
            info: `Reeba learns from Leidos VP, Nichol Case, the tips 
            for doing business/ partnering with Leidos, how to manage 
            and develop a fast-growing team, and how to juggle a hard-charging 
            executive life with personal interests and family.`,
            link: 'https://www.youtube.com/watch?v=IUy2yOoVrYU'
        },
        {
            img: Jason,
            alt: 'Jason Cullum',
            title: 'Featuring Jason Cullum, CMS Expert and Business Development Executive',
            info: `In this episode, we speak with Jason Cullum, CMS Expert 
            and Business Development Executive. Gain important insights on 
            doing business with the Centers for Medicare & Medicaid Services.`,
            link: 'https://www.youtube.com/watch?v=IBfGrlyvxjY'
        },
        {
            img: Theresa,
            alt: 'Theresa Holder',
            title: 'Featuring Federal Government contracting executive, Theresa Holder',
            info: `In the season 1 finale, Reeba speaks with Federal 
            Government contracting executive, Theresa Holder, about the 
            Federal Health IT market, Tips for career growth and success 
            in this space, and maintaining a healthy work life balance!`,
            link: 'https://www.youtube.com/watch?v=0VRGwpM-rRQ'
        }
    ]
    return (
        <div className='podcast'>
            <PageHeading heading="The New Way to Win!" content="A Podcast by Reeba Magulick"/>
                {
                    guestList.map((guest, i) =>
                     <div className="two-col" key={i}>
                        <div className="col-img">
                            <img src={guest.img} alt={guest.alt} />
                        </div>
                        <div className="col-info">
                            <h2>{guest.title}</h2>
                            <p>{guest.info}</p>
                            <a href={guest.link} className='green-btn'>Watch Full Episode!</a>
                        </div>
                    </div>

                    )
                }
        </div>
    );
};

export default Podcast;