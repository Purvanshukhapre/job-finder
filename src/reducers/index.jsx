import { combineReducers } from "redux";
import { changeCart } from "./reducers";

const mainReducer = combineReducers({changeCart});

export default mainReducer;