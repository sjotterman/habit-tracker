import * as types from './actionTypes';

export function createGoal(counter) {
    return { type: types.GOAL_CREATED, counter}
}