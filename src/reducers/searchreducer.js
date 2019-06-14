import { TEXT_CHANGED } from '../actions';

const initialState = {
    ticker: ""
}

function searchReducer(state = initialState, action) {
    switch(action.type) {
        case TEXT_CHANGED:
            return {...state, ticker: action.ticker}
      default:
            return state;
    }
  }

  export default searchReducer;