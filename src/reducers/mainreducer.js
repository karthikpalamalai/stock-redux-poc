import { SET_INITIAL_STATE_RESP, TEXT_CHANGED } from '../actions';

const initialState = {
    title: "",
    text: "hey, put something here"
};

function mainReducer(state = initialState, action) {
    switch(action.type) {
        case TEXT_CHANGED:
        case SET_INITIAL_STATE_RESP:
            return {...state, title: action.initialParameters.par1}
        default:
            return state;
    }
  }

  export default mainReducer;