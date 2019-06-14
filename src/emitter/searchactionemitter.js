import { 
    TEXT_CHANGED ,
    LATEST_NEWS_SUCCESS
} from '../actions';
import ServiceProvider from '../serviceProvider';

const emitTextChanged = (ticker) => dispatch => {
    console.log("Ticker Value ", ticker);
    ServiceProvider.latestNewsService(ticker, () => {}, (latestNews) => {
        dispatch({ type: TEXT_CHANGED, ticker }); 
        dispatch({ type: LATEST_NEWS_SUCCESS, latestNews })
    }, (err) => {});
    

};

export { emitTextChanged }