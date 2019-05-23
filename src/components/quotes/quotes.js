import React from 'react';
import Search from '../search/search';
import HeaderedList from '../common/headeredList/headeredList';
import NewsListItem from './newsItem/newsItem';
import CompanyOverviewItem from './company/company';
import TopPicks from './toppicks/toppicks';

import HeaderedControl from '../common/headeredControl/headeredControl';
// import TimeSeriesAreaChart from '../common/timeSeriesAreaChart/timeSeriesAreaChart';
// import TimeChart from '../common/timeSeriesAreaChart/timeChart';
// import GoogleChartResize from '../common/timeSeriesAreaChart/googleChartResize';
import MyAmChart from '../common/timeSeriesAreaChart/amchart';


import {AgGridReact} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

import './quotes.scss';

const Quotes = (props) => {
    const data  = ['news a', 'news b'];
    const companydata  = ['We Are Adaptive (WADP)'];
    const picksdata  = ['HOT', 'ABC', 'XYZ', '123'];
    const news = data.map(d => <NewsListItem item={d} />);
    const company = companydata.map(d => <CompanyOverviewItem item={d} />);
    const picks = picksdata.map(d => <TopPicks item={d} />);
    const gridData = {
        columnDefs: [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}

        ],
        rowData: [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]
    };
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
                    <div className='grid'>
                        <HeaderedControl title='Key Stat'> 
                        <div
                            className="ag-theme-balham"
                            style={{
                                height: '500px',
                                width: '600px'
                            }}
                        >
                            <AgGridReact
                                columnDefs={gridData.columnDefs}
                                rowData={gridData.rowData}>
                            </AgGridReact>
                        </div>
                        </HeaderedControl>
                    </div>
                </div>
                <div className='right-pane'> 
                    <div className='news'>
                        <HeaderedList title='Latest News'>
                           {news}
                        </HeaderedList>
                    </div>
                    <div className='overview'>
                        <HeaderedList title='Company Overview'>
                           {company}
                        </HeaderedList>
                    </div>
                    <div className='top-picks'>
                        <HeaderedList title='Top-Picks'>
                           {picks}
                        </HeaderedList>
                    </div>
                </div>
            </div>     
        </div>);
};

export default Quotes;