import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function goalsReducer(state = initialState.goals, action) {
  switch (action.type) {
    case types.CREATE_GOAL_SUCCESS:
      return [...state, Object.assign({}, action.goal)];

    case types.UPDATE_GOAL_SUCCESS:
      return state.map(goal => {
        if (goal._id === action.goal._id) {
          return action.goal;
        }
        return { ...goal };
      });

    case types.DELETE_GOAL_SUCCESS:
      const remainingGoals = state.filter(item => {
        return item._id !== action.goalId;
      });
      return [...remainingGoals];

    case types.LOAD_GOALS_SUCCESS:
      return action.goals;

    default:
      return state;
  }
}
