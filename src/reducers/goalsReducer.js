import * as types from "../actions/actionTypes";

export default function goalsReducer(state = [], action) {
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

    case types.DELETE_GOAL_SUCCCESS:
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
