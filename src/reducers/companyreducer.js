import { COMPANY_OVERVIEW_SUCCESS } from '../actions';

const initialState = {
    title: 'COMPANY OVERVIEW',
    name: '',
    ticker: '',
    companyUrl: '', 
    description: ''
}

function companyOverviewReducer(state = initialState, action) {
    switch(action.type) {
        case COMPANY_OVERVIEW_SUCCESS:
            return {title: state.title, ...action.companyOverview};
      default:
            return state;
    }

}
  export default companyOverviewReducer;