import * as types from './actionTypes';
import { currentDateTime }  from '../utils/timeFormatter';

export function createGoal(counter) {
    return { type: types.GOAL_CREATED, counter}
}

export function toggleGoal(goalId, date) {
    const currentDate = currentDateTime();

    date = date || currentDate;
    return { type: types.GOAL_TOGGLED, goalId, date}
}