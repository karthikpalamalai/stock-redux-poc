import React from 'react';
import { connect } from 'react-redux';
import NewsItem from '../newsitem/newsitem'

const LatestNewsComp = ({latestNews}) => {
    const { title, news } = latestNews;
    const chld = news.map(n => <li key={n.id}><NewsItem item={n}/></li>);
    return (
        <div>
            <span>{title}</span>
            <br />
            <ul>{chld}</ul>
        </div>);
}

const mapStateToProps = state => ({
    latestNews: state.latestNewsReducer
});
  
const mapDispatchToProps = dispatch => ({

});

const LatestNews = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LatestNewsComp);

export default LatestNews;