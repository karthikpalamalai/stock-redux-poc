import React from 'react';
import Search from '../search/search';
import HeaderedList from '../common/headeredList/headeredList';
import NewsListItem from './newsItem/newsItem';
import CompanyOverviewItem from './company/company'
import TopPicks from './toppicks/toppicks'


import './quotes.scss';

const Quotes = (props) => {
    const data  = ['news a', 'news b'];
    const companydata  = ['We Are Adaptive (WADP)'];
    const picksdata  = ['HOT', 'ABC', 'XYZ', '123'];
    const news = data.map(d => <NewsListItem item={d} />);
    const company = companydata.map(d => <CompanyOverviewItem item={d} />);
    const picks = picksdata.map(d => <TopPicks item={d} />);
    return (
        <div className='quotes'>
            <div className='search'>
                <Search />
            </div>   
            <div className='remaining'> 
                <div className='left-pane'>
                    <div className='chart'>Chart</div>
                    <div className='grid'>Grid</div>
                </div>
                <div className='right-pane'> 
                    <div className='news'>
                        <HeaderedList title='abc'>
                           {news}
                        </HeaderedList>
                    </div>
                    <div className='overview'>
                        <HeaderedList title='abc'>
                           {company}
                        </HeaderedList>
                    </div>
                    <div className='top-picks'>
                        <HeaderedList title='abc'>
                           {picks}
                        </HeaderedList>
                    </div>
                </div>
            </div>     
        </div>);
};

export default Quotes;