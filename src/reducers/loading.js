import { SHOW_LOADING, HIDE_LOADING } from '../actions/loading';

export default function loading(state = true, action){
    switch(action.type){
        case SHOW_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case HIDE_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}