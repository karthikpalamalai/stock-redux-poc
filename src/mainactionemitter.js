import { TEXT_CHANGED, TAB_CHANGED } from './actions';
import serviceProvider from './serviceProvider';

const emitTextChanged = (textChanged) => dispatch => {
    dispatch({ type: TEXT_CHANGED, initialParameters: { par1 : textChanged } }); 
};

const emitTabChanged = (currentActiveTabName) => dispatch => {
    dispatch({type: TAB_CHANGED, currentActiveTabName });
}

const emitClick = stock => dispatch => {
    serviceProvider.initStateService(
        { stock }, 
        transform => transform,
        transformedData => { 
            console.log('got data ===>', stock, "   ",  transformedData );
            dispatch({ type: TEXT_CHANGED, initialParameters: { par1 : transformedData.companyName } }); 
        }, 
        err => console.log(err));
};

export { emitTextChanged, emitClick, emitTabChanged };