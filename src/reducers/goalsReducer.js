import * as types from '../actions/actionTypes';

export default function goalsReducer(state = [], action) {
    switch(action.type) {
        case types.GOAL_TOGGLED:
            let updatedGoals = state.map( item => {
                    if (item.id === action.goalId) {
                        let newItem = item;
                        const done = newItem.done ? false : true;
                        return {...item, done};
                    }
                return item;
            })
            return updatedGoals;

        default:
            return state;
    }
};