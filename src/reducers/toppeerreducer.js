import { TOP_PEERS_SUCCESS } from '../actions';

const initialState = {
    title: 'TOP PEERS',
    peers: []
}

function topPeersReducer(state = initialState, action) {
    switch(action.type) {
        case TOP_PEERS_SUCCESS:
            return {title: state.title, ...action.topPeers};
      default:
            return state;
    }

}
  export default topPeersReducer;