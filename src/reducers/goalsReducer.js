import * as types from '../actions/actionTypes';

export default function goalsReducer(state = [], action) {
    switch(action.type) {
        case types.GOAL_TOGGLED:
            let updatedGoals = state.map( item => {
                if (item.id === action.goalId) {
                    let newItem = item;
                    const done = newItem.done ? false : true;
                    let dates_done = newItem.dates_done;
                    if (done) {
                        dates_done.push(action.date);
                        dates_done.sort();
                    } else {
                        dates_done = dates_done.filter(date => {
                            return date !== action.date;
                        })
                    }
                    return { ...item, done, dates_done };
                }
                return item;
            });
            return updatedGoals;

        default:
            return state;
    }
};