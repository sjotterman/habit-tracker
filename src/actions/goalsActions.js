import * as types from './actionTypes';

export function createGoal(counter) {
    return { type: types.GOAL_CREATED, counter}
}

export function toggleGoal(goalId) {
    return { type: types.GOAL_TOGGLED, goalId}
}