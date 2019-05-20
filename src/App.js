import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import serviceProvider from './serviceProvider';
import Main from './main';
import { SET_INITIAL_STATE_RESP } from './actions';

import rootReducer from './reducers/rootreducer';
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const initState = () => dispatch => {
   serviceProvider.initStateService(
     { stock: 'aapl' }, 
   //  transform => {},
     transform => { return { blimpo: transform.companyName } },
     data => {
       console.log(data);
       dispatch( { type: SET_INITIAL_STATE_RESP, initialParameters: { par1: data.blimpo } });
     }, 
     err => {});
};

function App() {
  store.dispatch(initState());
  return (
    <Provider store={store}>
      <Main className="flexcontainer" />
    </Provider>
  );
}

export default App;
