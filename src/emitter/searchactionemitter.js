import { 
    TEXT_CHANGED ,
    LATEST_NEWS_SUCCESS,
    COMPANY_OVERVIEW_SUCCESS,
    TOP_PEERS_SUCCESS,
    KEYSTATS_SUCCESS,
    STOCK_CHART_SUCCESS
} from '../actions';
import ServiceProvider from '../serviceProvider';


const emitTextChanged = (ticker) => dispatch => {
    dispatch({ type: TEXT_CHANGED, ticker }); 
    // ServiceProvider.tickerValidationService(ticker, () => {}, (success) => {}, (err) => {});
    ServiceProvider.latestNewsService(ticker, () => {}, (latestNews) => {
        dispatch({ type: LATEST_NEWS_SUCCESS, latestNews })
    }, (err) => {});
    ServiceProvider.companyOverviewService(ticker, () => {}, (companyOverview) => {
        dispatch({ type: COMPANY_OVERVIEW_SUCCESS, companyOverview })
    }, (err) => {});
    ServiceProvider.topPeersService(ticker, () => {}, (topPeers) => {
        dispatch({ type: TOP_PEERS_SUCCESS, topPeers })
    }, (err) => {});
    ServiceProvider.keyStatsService(ticker,() => {}, (keystats) => {
        dispatch({ type: KEYSTATS_SUCCESS, keystats })
    }, (err) => {});
    ServiceProvider.stockChartService(ticker,() => {}, (chartdata) => {
        dispatch({ type: STOCK_CHART_SUCCESS, chartdata })
    }, (err) => {});

};

export { emitTextChanged }