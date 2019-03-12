import * as types from '../actions/actionTypes';

export default function goalsReducer(state = [], action) {
    switch(action.type) {
        case types.GOAL_TOGGLED:
            let updatedGoals = state.map( item => {
                if (item.id === action.goalId) {
                    const done = item.done ? false : true;
                    let dates_done = [...item.dates_done];
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
                return {...item};
            });
            return updatedGoals;

        case types.GOAL_CREATED:
            let newGoal = action.goal;
            newGoal = {
                ...newGoal,
                dates_done: [],
                done: false,
                streak: 0
            };
            return [...state, newGoal] ;

        case types.GOAL_DELETED:
            const remainingGoals = state.filter( item => {
                return item.id !== action.goalId
            });
            return [...remainingGoals] ;

        case types.LOAD_GOALS_SUCCESS:
            return action.goals;

        default:
            return state;
    }
};