import { createStore } from "redux";
import appReducer from "./reducers.js";

let store = createStore(appReducer);

export default store;
