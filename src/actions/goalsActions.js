import * as types from "./actionTypes";
import {
  currentDateTime,
  alreadyDone,
  isSameDay
} from "../utils/timeFormatter";
import {
  getAllGoals,
  saveNewGoal,
  deleteGoalById,
  modifyGoal
} from "../api/GoalApi";
import { beginApiCall } from "./apiStatusActions";

export function createGoalSuccess(goal) {
  return { type: types.CREATE_GOAL_SUCCESS, goal };
}

export function updateGoalSuccess(goal) {
  return { type: types.UPDATE_GOAL_SUCCESS, goal };
}

export function deleteGoal(goalId) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return deleteGoalById(goalId)
      .then(() => {
        dispatch(deleteGoalSuccess(goalId));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteGoalSuccess(goalId) {
  return { type: types.DELETE_GOAL_SUCCESS, goalId };
}

export function loadGoalsSuccess(goals) {
  return { type: types.LOAD_GOALS_SUCCESS, goals };
}

export function loadGoals() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return getAllGoals()
      .then(goals => {
        dispatch(loadGoalsSuccess(goals));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function createGoal(goal) {
  if (!goal.dates_done) {
    goal.dates_done = [];
  }
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return saveNewGoal(goal)
      .then(savedGoal => {
        dispatch(createGoalSuccess(savedGoal));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateGoal(goal) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return modifyGoal(goal)
      .then(savedGoal => {
        dispatch(updateGoalSuccess(savedGoal));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function toggleGoal(goal, date) {
  const currentDate = currentDateTime();
  date = date || currentDate;
  let newGoal;
  if (alreadyDone(goal.dates_done, date)) {
    newGoal = markGoalIncomplete(goal, date);
  } else {
    newGoal = markGoalComplete(goal, date);
  }
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return modifyGoal(newGoal)
      .then(savedGoal => {
        dispatch(updateGoalSuccess(savedGoal));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function markGoalComplete(goal, date) {
  const dates_done = [...goal.dates_done];
  if (!dates_done.includes(date)) {
    dates_done.push(date);
    dates_done.sort();
  }
  return { ...goal, dates_done };
}

export function markGoalIncomplete(goal, date) {
  let dates_done = [...goal.dates_done];
  dates_done = dates_done.filter(item => {
    return !isSameDay(item, date);
  });
  return { ...goal, dates_done };
}
