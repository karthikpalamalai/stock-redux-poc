import React from 'react';
import Search from '../search/search';

import LatestNews from './latestnews/latestnews';
import CompanyOverview from './company/company';
import TopPeers from './toppicks/toppicks';
import Keystats from './keystats/keystats';
import StockChart from '../common/stockChart/stockchart'
import LineChart from '../common/stockChart/lineChart'
import FrequencyPicker from '../common/frequency/frequencyPicker'

// import HeaderedList from '../common/headeredList/headeredList';
// import HeaderedControl from '../common/headeredControl/headeredControl';
// import MyAmChart from '../common/timeSeriesAreaChart/amchart';

import './quotes.scss';

const createData = () => {
    const data = [];
    let price1 = 1000;
    let price2 = 1200;
    for (let i = 0; i < 10; i++) {
      price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
      data.push({ date1: new Date(2015, 0, i), price1 });
    }
    for (let i = 0; i < 10; i++) {
      price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
      data.push({ date2: new Date(2017, 0, i), price2 });
    }
    return data;
}

const Quotes = (props) => {

    // '1D': { id: '1D', display: '1 day'},
    // '1W': { id: '1W', display: '1 week'}, 
    // '1M': { id: '1M', display: '1 month'},
    // '1Y': { id: '1Y', display: '1 year'} 

    const d = {
        config: [
            { id: '1D', display: '1 day'},
            { id: '1W', display: '1 week'}, 
            { id: '1M', display: '1 month'},
            { id: '1Y', display: '1 year'} 
        ]
        ,
        selectedID: '1D'
    }
    const handleFrequencyChanged = (event) => console.log(event); 
    return (
        <div className='quotes'>
            <div className='search'>
                <Search />

            </div>   
            <div className='remaining'> 
                <div className='left-pane'>
                    <div className='adaptv-frequency'> 
                        <FrequencyPicker onFrequencyChanged={handleFrequencyChanged} config={d.config} selectedID={d.selectedID} />
                    </div> 
                    <div >
                        <LineChart data={createData()} />
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