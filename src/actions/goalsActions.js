import * as types from './actionTypes';
import { currentDateTime }  from '../utils/timeFormatter';
import goalApi from '../api/mockGoalApi'

export function createGoal(goal) {
    return { type: types.GOAL_CREATED, goal};
}

export function deleteGoal(goalId) {
    return { type: types.GOAL_DELETED, goalId };
}

export function toggleGoal(goalId, date) {
    const currentDate = currentDateTime();

    date = date || currentDate;
    return { type: types.GOAL_TOGGLED, goalId, date};
}

export function loadGoalsSuccess(goals) {
    return { type: types.LOAD_GOALS_SUCCESS, goals};
}

export function loadGoals() {
    return function(dispatch) {
        return goalApi.getAllGoals().then( goals => {
            dispatch(loadGoalsSuccess(goals));
        }).catch(error => {
            throw(error);
        });
    }
}