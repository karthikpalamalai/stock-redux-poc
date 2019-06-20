import { STOCK_CHART_SUCCESS } from '../actions'; 

const initialState = {  
    title: 'Stock Chart',  
    chartconfig: '',
    chartdata: ''
} 

function stockChartReducer(state = initialState, action) {

        switch(action.type) {
            case STOCK_CHART_SUCCESS:
                return { title: state.title, ...action.stockchart }
            default:
                return state; 
        }

}

export default stockChartReducer;