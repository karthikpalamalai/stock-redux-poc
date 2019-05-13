import { TEXT_CHANGED } from './actions';

const emitTextChanged = (textChanged) => dispatch => {
    dispatch({ type: TEXT_CHANGED, initialParameters: { par1 : textChanged } });
};

export { emitTextChanged };