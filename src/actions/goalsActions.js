import * as types from './actionTypes';
import { currentDateTime }  from '../utils/timeFormatter';
import goalApi from '../api/mockGoalApi'


export function createGoalSuccess(goal) {
    return { type: types.CREATE_GOAL_SUCCESS, goal};
}

export function updateGoalSuccess(goal) {
    return { type: types.UPDATE_GOAL_SUCCESS, goal};
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

export function saveGoal(goal) {
    return function (dispatch, getState) {
        return goalApi.saveGoal(goal).then(savedGoal => {
            goal.id ? dispatch(updateGoalSuccess(savedGoal)) :
                dispatch(createGoalSuccess(savedGoal));
        }).catch(error => {
            throw(error);
        });
    };
}