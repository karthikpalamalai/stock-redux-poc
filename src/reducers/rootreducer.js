import { combineReducers } from 'redux';
import mainReducer from './mainreducer';
import searchReducer from './searchreducer';
import latestNewsReducer from './latestnewsreducer';
import companyOverviewReducer from './companyreducer';
import topPeersReducer from './toppeerreducer';
import keystatReducer from './keystatsreducer'; 
import stockchartReducer from './stockchartreducer'; 
import priceChartWrapperReducer from './pricechartwrapperreducer';

const rootReducer = combineReducers({
    mainReducer, searchReducer, latestNewsReducer, companyOverviewReducer, 
    topPeersReducer, keystatReducer, stockchartReducer, priceChartWrapperReducer
});
  
export default rootReducer;