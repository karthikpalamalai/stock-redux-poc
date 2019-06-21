import React from 'react';
import Search from '../search/search';

import LatestNews from './latestnews/latestnews';
import CompanyOverview from './company/company';
import TopPeers from './toppicks/toppicks';
import Keystats from './keystats/keystats';
import PriceChartWrapper from './priceChartWrapper/priceChartWrapper'; 

import './quotes.scss';

const Quotes = (props) => {

    return (
        <div className='quotes'>
            <div className='search'>
                <Search />
            </div>   
            <div className='remaining'> 
                <div className='left-pane'>
                    <div>
                        <PriceChartWrapper />
                    </div>
                    <div >
                        <Keystats />                    
                    </div>
                </div>
                <div className='right-pane'> 
                    <div className='news'>
                        <LatestNews />
                    </div>
                    <div className='overview'>
                        <CompanyOverview />
                    </div>
                    <div className='top-picks'>
                        <TopPeers />
                    </div>
                </div>
            </div>     
        </div>);
};

export default Quotes;