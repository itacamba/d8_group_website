import React from 'react';
import Title from '../../../Shared/Title/Title';
import './Founder.css'

const Founder = () => {
    return (
        <div className='founder'>
            <Title heading="THE FOUNDER" subtitle="Hear from our founder!" paragraph="Reeba Magulick from d8 Group."/>
            <div className="video">
                <iframe  src="https://www.youtube.com/embed/bIoLb8hQAhc" title="d8 Group Welcome Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Founder;