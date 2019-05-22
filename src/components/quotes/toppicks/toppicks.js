import React from 'react';
import './toppicks.scss';

const TopPicks = ({item}) => {
    return(
            <div className='.adaptv-toppicks'> 
                <p> {item} </p>
            </div>
    );
}; 

export default TopPicks; 