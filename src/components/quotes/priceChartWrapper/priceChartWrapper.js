import React from 'react';
import { connect } from 'react-redux';

import FrequencyPicker from '../../common/frequency/frequencyPicker';
import LineChart from '../../common/stockChart/lineChart';
import { emitFrequencyChanged } from '../../../emitter/pricechartwrapperemitter';

import './priceChartWrapper.scss'; 

const PriceChartWrapperComp = ({ priceChartWrapper, dispatchOnFrequencyChanged }) => {
    const { config, chartdata, selectedId } = priceChartWrapper;
 
    return(
        <div>
            <div className='adaptv-frequency'>           
                <FrequencyPicker                 
                    config={config} 
                    selectedId={selectedId} 
                    onFrequencyChanged={dispatchOnFrequencyChanged} 
                /> 
            </div>
            <LineChart data={ chartdata }/>
        </div>    
    )
}

const mapStateToProps = state => ({
    priceChartWrapper: state.priceChartWrapperReducer
});
  
const mapDispatchToProps = dispatch => ({
    dispatchOnFrequencyChanged: (freq) => dispatch(emitFrequencyChanged(freq))
});

const PriceChartWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PriceChartWrapperComp);

export default PriceChartWrapper;


