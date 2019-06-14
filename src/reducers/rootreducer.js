import { combineReducers } from 'redux';
import mainReducer from './mainreducer';
import searchReducer from './searchreducer';
import latestNewsReducer from './latestnewsreducer';

const rootReducer = combineReducers({
    mainReducer, searchReducer, latestNewsReducer
});
  
export default rootReducer;