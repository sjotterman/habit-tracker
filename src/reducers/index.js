import { combineReducers } from 'redux';
import goals from './goalsReducer';

const rootReducer = combineReducers({
    goals
});

export default rootReducer;