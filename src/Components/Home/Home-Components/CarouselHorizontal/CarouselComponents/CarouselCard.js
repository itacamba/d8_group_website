import React, { useState } from 'react';

const CarouselCard = ({service}) => {
    
    const [readMore, setReadMore] = useState(false)

    const onReadMoreClick = () => {
        setReadMore(!readMore)
    }
    
    return (
        <div className="carousel-card">
            <div className="card-circle-icon">
                <div className="img"></div>
            </div>
            <h2>{service.title}</h2>
            <h3>{service.subtitle}</h3>
            <p>{readMore? service.content : service.content.slice(0,200)}</p>
            <button onClick={onReadMoreClick}>{readMore? 'READ LESS' : 'READ MORE'}</button>
        </div>
    );
};

export default CarouselCard;