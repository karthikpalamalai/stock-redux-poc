import React from 'react';
import { connect } from 'react-redux';
import { emitTextChanged, emitClick, emitTabChanged } from './mainactionemitter';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import Quotes from './components/quotes/quotes';
import Markets from './components/markets/markets';
import Watchlists from './components/watchlists/watchlists';
import Footer from './components/footer/footer';

import './main.scss';

const Main = (props) => {
  const getActiveInactiveBackgroundColor = (tabName) => {
    if (props.main.currentActiveTabName === tabName)
      return {background: 'blue'};
    else 
      return {background: 'transparent'};
  };

  const getActiveInactiveFontColor = (tabName) => {
    if (props.main.currentActiveTabName === tabName)
      return {color: 'white'};
    else 
      return {color: 'darkgray'};
  };
  const lst = props.main.tabs.map(
    (tab) =>  
    <li key={tab.tabId} style={getActiveInactiveBackgroundColor(tab.tabId)} onClick={(el) => props.onTabChanged(tab.tabId)}>
      <NavLink to={tab.tabNavPath} style={getActiveInactiveFontColor(tab.tabId)}>{tab.tabName}</NavLink>
    </li>);
  return (
    <Router>
       <div className='container'>
         <div className='header'>
           <div className='adptv-logo'>
             logo
           </div>
           <div className='adptv-nav'>
             <ul>
              {lst}
             </ul>
           </div>
         </div>
         <Switch>
           <div className='content'>
             <Route exact path="/" component={Quotes} />
             <Route path="/markets" component={Markets} />
             <Route path="/watchlists" component={Watchlists} />
           </div>
         </Switch>
         <Footer className='footer' />  
       </div>
     </Router>);
};

const mapStateToProps = state => ({
    main: state.mainReducer
});
  
const mapDispatchToProps = dispatch => ({
     onTextChange: (txt) => dispatch(emitTextChanged(txt)),
     onClick: ticker => dispatch(emitClick(ticker)),
     onTabChanged: tabName => dispatch(emitTabChanged(tabName))
  });

const connectedMain = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
  
export default connectedMain;