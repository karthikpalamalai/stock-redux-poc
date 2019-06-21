import { PRICE_CHART_WRAPPER_SUCCESS,
         FREQ_CHANGE_SELECTED } from '../actions'; 

const chartInitData = () => {
    const data = [];
    let price1 = 1000;
    let price2 = 1200;
    for (let i = 0; i < 10; i++) {
      price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
      data.push({ date1: new Date(2015, 0, i), price1 });
    }
    for (let i = 0; i < 10; i++) {
      price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
      data.push({ date2: new Date(2017, 0, i), price2 });
    }
    return data;
}

const initialState = {  
    title: 'Price Chart Wrapper',  
    config: [
        { id: '1D', display: '1D'},
        { id: '5D', display: '5D'}, 
        { id: '1M', display: '1M'},
        { id: '1Y', display: '1Y'},
        { id: '5Y', display: '5Y'},
        { id: 'MAX', display: 'MAX'},
    ],
    chartdata: chartInitData() ,
    selectedId: '1Y',
} 

function priceChartWrapperReducer(state = initialState, action) {

        switch(action.type) {
            // case PRICE_CHART_WRAPPER_SUCCESS:
            //     return { title: state.title, ...action.priceChartWrapperAction }
            case FREQ_CHANGE_SELECTED: 
                return {...state, selectedId: action.selectedId };
            default:
                return state; 
        }

}

export default priceChartWrapperReducer;