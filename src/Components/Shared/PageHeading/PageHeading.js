import React from 'react';
import './PageHeading.css'



const PageHeading = ({heading, page}) => {
    return (
        <div className='page-heading'>
            <div className="heading-links">
                <p><a href="/">Home</a></p> / <p>{page}</p>
            </div>
            <h2>{heading}</h2>
        </div>
        
    );
};

export default PageHeading;