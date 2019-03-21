import * as types from "../actions/actionTypes";

export default function goalsReducer(state = [], action) {
  switch (action.type) {
    case types.GOAL_TOGGLED:
      return state.map(item => {
        if (item.id === action.goalId) {
          const done = item.done ? false : true;
          let dates_done = [...item.dates_done];
          if (done) {
            dates_done.push(action.date);
            dates_done.sort();
          } else {
            dates_done = dates_done.filter(date => {
              return date !== action.date;
            });
          }
          return { ...item, done, dates_done };
        }
        return { ...item };
      });

    case types.CREATE_GOAL_SUCCESS:
      return [...state, Object.assign({}, action.goal)];

    case types.UPDATE_GOAL_SUCCESS:
      return [
        ...state.filter(goal => goal.id !== action.goal.id),
        Object.assign({}, action.goal)
      ];

    case types.DELETE_GOAL_SUCCCESS:
      const remainingGoals = state.filter(item => {
        return item.id !== action.goalId;
      });
      return [...remainingGoals];

    case types.LOAD_GOALS_SUCCESS:
      return action.goals;

    default:
      return state;
  }
}
