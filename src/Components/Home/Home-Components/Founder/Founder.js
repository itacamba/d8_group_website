import React from 'react';
import Title from '../../../Shared/Title/Title';
import './Founder.css'

const Founder = () => {
    return (
        <div className='founder'>
            <Title heading="the founder" title="A word from our founder Reeba Magulick" />
            <div className="video">
                <iframe  src="https://www.youtube.com/embed/bIoLb8hQAhc" title="d8 Group Welcome Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Founder;