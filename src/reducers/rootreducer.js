import { combineReducers } from 'redux';
import mainReducer from './mainreducer';
import searchReducer from './searchreducer';
import latestNewsReducer from './latestnewsreducer';
import companyOverviewReducer from './companyreducer';
import topPeersReducer from './toppeerreducer';
import keystatReducers from './keystatsreducer'; 

const rootReducer = combineReducers({
    mainReducer, searchReducer, latestNewsReducer, companyOverviewReducer, topPeersReducer, keystatReducers
});
  
export default rootReducer;