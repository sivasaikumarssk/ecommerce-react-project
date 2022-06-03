import { combineReducers } from "redux";
import {prodReducer} from "./Reducer";

export const reducer = combineReducers({
    allProd : prodReducer
});




