import React from 'react';
import { connect } from 'react-redux';
import { emitTextChanged, emitClick } from './mainactionemitter';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Search from './components/search/search';
import './main.scss';

const Main = (props) => {

    return(
        <div className='container'>
          <Header className='header' />
          <div className='content'>
             <div className='search'>
                <Search />
             </div>
             <div className='remaining'>
                <div className='left-pane'>
                  <div className='chart'>Chart</div>
                  <div className='grid'>Grid</div>
                </div>
                <div className='right-pane'>
                  <div className='news'>News</div>
                  <div className='overview'>Overview</div>
                  <div className='top-picks'>top-picks</div>
                </div>
             </div>
          </div>
          <Footer className='footer' />
        </div>);
};

const mapStateToProps = state => ({
    main: state.mainReducer
});
  
const mapDispatchToProps = dispatch => ({
     onTextChange: (txt) => dispatch(emitTextChanged(txt)),
     onClick: ticker => dispatch(emitClick(ticker))
  });

const connectedMain = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
  
export default connectedMain;