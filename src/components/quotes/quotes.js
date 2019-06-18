import React from 'react';
import Search from '../search/search';

import LatestNews from './latestnews/latestnews';
import CompanyOverview from './company/company';
import TopPeers from './toppicks/toppicks';
import Keystats from './keystats/keystats';

// import HeaderedList from '../common/headeredList/headeredList';
// import HeaderedControl from '../common/headeredControl/headeredControl';
import MyAmChart from '../common/timeSeriesAreaChart/amchart';

import './quotes.scss';

const Quotes = (props) => {
    //   const data  = ['news a', 'news b'];
    //   const companydata  = ['We Are Adaptive (WADP)'];
    //   const picksdata  = ['HOT', 'ABC', 'XYZ', '123'];
    //   const news = data.map(d => <NewsListItem item={d} />);
    //   const company = companydata.map(d => <CompanyOverviewItem item={d} />);
    //   const picks = picksdata.map(d => <TopPicks item={d} />);

    return (
        <div className='quotes'>
            <div className='search'>
                <Search />
            </div>   
            <div className='remaining'> 
                <div className='left-pane'>
                    <div className='chart'>
                      <MyAmChart />
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