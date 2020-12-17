import {FETCH_PAIR,MARKET_FETCH_ERROR} from "../types";

const initialState = [];
const fetcher = (state = initialState,action) => {
    if(action.type === FETCH_PAIR){
        return action.markets
    }else if(action.type === MARKET_FETCH_ERROR){
        return action.markets
    }
    return state;    
}

export default fetcher;