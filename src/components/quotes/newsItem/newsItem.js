import React from 'react';

import './newsitem.scss';

const NewsItem = ({item}) => {
   const {
        title,
        summary,
        publicationDate,
        source,
        rating, 
        category,
        author} = item;
    return(
        <div> 
            <div className='adaptv-newsItem'> 
                <p> Category {category} </p>
                <p> Summary {summary} </p>
            </div>
            <div className='adaptv-newsSource'> 
                <p> news source </p>
            </div>
        </div>
    );
}; 

export default NewsItem; 