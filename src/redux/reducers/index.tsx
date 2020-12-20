import fetcher from "./fetcher";
import tabstate from "./tabstate";
import modal from "./modal";
import {combineReducers} from "redux";

const reducers = combineReducers({
    fetcher,
    tabstate,
    modal
})


export default reducers;