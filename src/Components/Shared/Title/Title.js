import React from 'react';
import './Title.css'

const Title = ({heading, title, subtitle, mainTitle, paragraph}) => {
    return (
        <div className='title-section'>
            {heading? <h4>{heading}</h4> : null }
            {mainTitle? <h1>{mainTitle}</h1> : null}
            {title? <h2>{title}</h2> : null}
            {subtitle? <h3>{subtitle}</h3> : null }
            {paragraph? <p>{paragraph}</p> : null }
        </div>
    );
};

export default Title;