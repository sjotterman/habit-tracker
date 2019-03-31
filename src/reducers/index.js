import { combineReducers } from "redux";
import goals from "./goalsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  goals,
  apiCallsInProgress
});

export default rootReducer;
