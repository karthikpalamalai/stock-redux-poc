import { KEYSTATS_SUCCESS } from '../actions'; 

const initialState = {  
    title: 'COMPANY OVERVIEW',  
    previousClose: 0,
    dayRange: 0, 
    volume: 0, 
    marketCap: 0,
    PERatio: 0, 
    openPrice: 0, 
    WeekRange52: '0-0',
    totalAvgVolume: 0,
    earningsPerShare: 0, 
    dividentYield: ''
} 

function keystatReducers(state = initialState, action) {

        switch(action.type) {
            case KEYSTATS_SUCCESS:
                return { title: state.title, ...action.keystats }
            default:
                return state; 
        }

}

export default keystatReducers;