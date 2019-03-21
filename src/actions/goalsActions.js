import * as types from "./actionTypes";
import { currentDateTime } from "../utils/timeFormatter";
import { getAllGoals, saveNewGoal, deleteGoalById } from "../api/GoalApi";

export function createGoalSuccess(goal) {
  return { type: types.CREATE_GOAL_SUCCESS, goal };
}

export function updateGoalSuccess(goal) {
  return { type: types.UPDATE_GOAL_SUCCESS, goal };
}

export function deleteGoal(goalId) {
  return function(dispatch) {
    return deleteGoalById(goalId)
      .then(goals => {
        dispatch(deleteGoalSuccess(goalId));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteGoalSuccess(goalId) {
  return { type: types.DELETE_GOAL_SUCCCESS, goalId };
}

export function toggleGoal(goalId, date) {
  const currentDate = currentDateTime();

  date = date || currentDate;
  return { type: types.GOAL_TOGGLED, goalId, date };
}

export function loadGoalsSuccess(goals) {
  return { type: types.LOAD_GOALS_SUCCESS, goals };
}

export function loadGoals() {
  return function(dispatch) {
    return getAllGoals()
      .then(goals => {
        dispatch(loadGoalsSuccess(goals));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveGoal(goal) {
  if (!goal.done) {
    goal.done = false;
  }
  if (!goal.dates_done) {
    goal.dates_done = [];
  }
  return function(dispatch, getState) {
    return saveNewGoal(goal)
      .then(savedGoal => {
        goal.id
          ? dispatch(updateGoalSuccess(savedGoal))
          : dispatch(createGoalSuccess(savedGoal));
      })
      .catch(error => {
        throw error;
      });
  };
}
