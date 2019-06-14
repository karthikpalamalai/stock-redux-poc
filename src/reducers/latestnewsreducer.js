import { LATEST_NEWS_SUCCESS } from '../actions';

const initialState = {
    title: 'LATEST NEWS',
    news: []
}

function latestNewsReducer(state = initialState, action) {
    switch(action.type) {
        case LATEST_NEWS_SUCCESS:
            return {...state, news: action.latestNews}
      default:
            return state;
    }

}
  export default latestNewsReducer;