import { combineReducers } from 'redux';
import counters from './counterReducer';

const rootReducer = combineReducers({
    counters
});

export default rootReducer;