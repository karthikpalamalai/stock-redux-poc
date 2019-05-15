import { TEXT_CHANGED } from './actions';
import serviceProvider from './serviceProvider';

const emitTextChanged = (textChanged) => dispatch => {
    dispatch({ type: TEXT_CHANGED, initialParameters: { par1 : textChanged } }); 
};

const emitClick = () => dispatch => {
    serviceProvider.initStateService(
        { stock: 'aapl' }, 
        transform => transform,
        transformedData => { 
            console.log('got data ', transformedData );
            dispatch({ type: TEXT_CHANGED, initialParameters: { par1 : transformedData.latestSource } }); 
        }, 
        err => console.log(err));
};

export { emitTextChanged, emitClick };