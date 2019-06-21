import React from 'react';
import { connect } from 'react-redux';

import './currentprice.scss';

const CurrentPriceComp = ({currentPrice}) => {

    return (
        <div>
            <label > $160 </label>
            <label> $2.94 </label>
            <label> $1.88% </label>
        </div>);
}

const mapStateToProps = state => ({
    currentPrice: state.currentPriceReducer
});
  
const mapDispatchToProps = dispatch => ({

});

const CurrentPrice = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrentPriceComp);

export default CurrentPrice;