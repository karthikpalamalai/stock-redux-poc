import React from 'react';
import { connect } from 'react-redux';
import './toppicks.scss';

const TopPeersComp = ({topPeers}) => {
    const { title, peers } = topPeers;
    const chld = peers.map(n => <li key={n.ticker}> {n.ticker} </li>);
    return(
            <div className='adaptv-toppicks'>             
                <div>
                    <span>{title}</span>
                        <br />
                    <div className='adaptv-toplist'>     
                        <ul >{chld}</ul>
                    </div>     
                </div>
            </div>
    );
}; 

const mapStateToProps = state => ({
    topPeers: state.topPeersReducer
});
  
const mapDispatchToProps = dispatch => ({

});

const TopPeers = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopPeersComp);

export default TopPeers; 