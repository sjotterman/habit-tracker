import { combineReducers } from 'redux';
import counters from './counterReducer';
import goals from './goalsReducer';

const rootReducer = combineReducers({
    counters,
    goals
});

export default rootReducer;