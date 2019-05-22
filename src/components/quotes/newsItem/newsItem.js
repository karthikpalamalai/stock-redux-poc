import React from 'react';

import './newsItem.scss';

const NewsItem = ({item}) => {
    return(
        <div> 
            <div className='adaptv-newsItem'> 
                <p> {item} </p>
            </div>
            <div className='adaptv-newsSource'> 
                <p> news source </p>
            </div>
        </div>
    );
}; 

export default NewsItem; 