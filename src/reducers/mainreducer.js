import { SET_INITIAL_STATE_RESP, TEXT_CHANGED, TAB_CHANGED } from '../actions';

const initialState = {
    tabs: [
        {
            tabId: 'quotes', 
            tabName: 'Quotes', 
            tabNavPath: '/'
        }, 
        {tabId: 'markets', tabName: 'Markets', tabNavPath:'/markets'}
       , {tabId: 'watchlists', tabName: 'WatchLists', tabNavPath:'/watchlists'}
    ],
    title: '',
    text: 'hey, put something here',
    currentActiveTabName: 'quotes'
};

function mainReducer(state = initialState, action) {
    switch(action.type) {
        case TEXT_CHANGED:
        case SET_INITIAL_STATE_RESP:
            return {...state, title: action.initialParameters.par1}
        case TAB_CHANGED: 
            return {...state, currentActiveTabName: action.currentActiveTabName}
        default:
            return state;
    }
  }

  export default mainReducer;