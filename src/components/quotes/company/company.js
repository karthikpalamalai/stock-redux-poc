import React from 'react';
import './company.scss';

const CompanyOverview = ({item}) => {
    return(
        <div> 
            <div className='adaptv-comanyName'> 
                <p> {item} </p>
            </div>
            <div className='adaptv-companyurl'> 
                <a href="http://www.weareadaptive.com"> www.weareadaptive.com </a>
            </div>
            <div className='adaptv-companydesc'> 
                <p> Real-time trading technology is fundamentally changing the way business is conducted within financial services, capital and commodity markets.  </p>
            </div>
        </div>
    );
}; 

export default CompanyOverview; 