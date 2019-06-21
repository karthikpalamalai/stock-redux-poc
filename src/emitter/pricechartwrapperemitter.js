import {
    PRICE_CHART_WRAPPER_SUCCESS,
    FREQ_CHANGE_SELECTED
} from '../actions'; 

import ServiceProvider from '../serviceProvider';

const emitFrequencyChanged = (newFrequency) => dispatch => {

   // console.log(" emitFrequencySelected => ", selectedId: newFrequency.id)

    // ServiceProvider.stockChartService(frequency,() => {}, () => {
    //     dispatch({ type: PRICE_CHART_WRAPPER_SUCCESS, frequency })
    // }, (err) => {});
    dispatch( { type: FREQ_CHANGE_SELECTED, selectedId: newFrequency.id} )

}

export { emitFrequencyChanged }