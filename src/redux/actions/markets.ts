import fetch from "axios";
import {FETCH_PAIR,MARKET_FETCH_ERROR} from "../types";

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchMarkets  = () => {
    return async (dispatch) => {
        console.log('called');   
        try{
                const response = await fetch(`${api_url}/api/market`, {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                });
    
                const markets = await response.json();
                dispatch({
                    type: FETCH_PAIR,
                    markets
                });
            } catch(err){
                dispatch({
                    type: MARKET_FETCH_ERROR,
                    markets: err.message
                });
           }
    }
}