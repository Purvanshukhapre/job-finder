import { legacy_createStore as createStore } from "redux";
import mainReducer from "./reducers";

const myStore = createStore(mainReducer);

export default myStore;