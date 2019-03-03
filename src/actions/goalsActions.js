import * as types from './actionTypes';

export function createGoal(counter) {
    return { type: types.GOAL_CREATED, counter}
}

export function toggleGoal(goalId, date) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    const currentDate = `${yyyy}-${mm}-${dd}`;

    date = date || currentDate;
    return { type: types.GOAL_TOGGLED, goalId, date}
}