import { TEXT_CHANGED } from './actions';
import serviceProvider from './serviceProvider';

const emitTextChanged = (textChanged) => dispatch => {
    // serviceProvider.abc({}, data => {  dispatch({ type: TEXT_CHANGED, initialParameters: { par1 : textChanged } }); }, 
    // error => { dispatch(SOME_ERROR_ACTION)});
   
};

export { emitTextChanged };