import { SET_INITIAL_STATE_RESP, TEXT_CHANGED, TAB_CHANGED } from '../actions';

const initialState = {
    tabs: [
        {
            tabId: 'quotes', 
            tabName: 'QUOTES', 
            tabNavPath: '/'
        }, 
        {tabId: 'markets', tabName: 'MARKETS', tabNavPath:'/markets'}
       , {tabId: 'watchlists', tabName: 'WATCHLISTS', tabNavPath:'/watchlists'}
    ],
    title: '',
    text: 'hey, put something here',
    currentActiveTabName: 'quotes'
};

function mainReducer(state = initialState, action) {
    switch(action.type) {
        case TAB_CHANGED: 
            return {...state, currentActiveTabName: action.currentActiveTabName}
        default:
            return state;
    }
  }

  export default mainReducer;