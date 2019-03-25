import * as types from "../../actions/actionTypes";
import goalsReducer from "../goalsReducer";

describe("goals reducer", () => {
  it("should return the initial state", () => {
    expect(goalsReducer(undefined, {})).toEqual([]);
  });

  it("should handle loading all goals", () => {
    const initialState = [];
    const allGoals = [
      {
        id: "brush-my-teeth",
        name: "Brush my teeth",
        dates_done: ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04"]
      },
      {
        id: "eat-food",
        name: "Eat food",
        dates_done: ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04"]
      }
    ];
    const action = {
      type: types.LOAD_GOALS_SUCCESS,
      goals: allGoals
    };
    expect(goalsReducer(initialState, action)).toEqual(allGoals);
  });

  it("should create a new goal", () => {
    const initialState = [];
    const nextState = [
      {
        id: "eat-food",
        name: "Eat food",
        dates_done: []
      }
    ];
    const action = {
      type: types.CREATE_GOAL_SUCCESS,
      goal: {
        id: "eat-food",
        name: "Eat food",
        dates_done: []
      }
    };
    expect(goalsReducer(initialState, action)).toEqual(nextState);
  });

  it("should update an existing goal", () => {
    const initialState = [
      {
        _id: "eat-food",
        name: "Eat food",
        dates_done: []
      },
      {
        _id: "drink-water",
        name: "Drink water",
        dates_done: []
      }
    ];
    const nextState = [
      {
        _id: "eat-food",
        name: "Eat tasty food",
        dates_done: []
      },
      {
        _id: "drink-water",
        name: "Drink water",
        dates_done: []
      }
    ];
    const action = {
      type: types.UPDATE_GOAL_SUCCESS,
      goal: {
        _id: "eat-food",
        name: "Eat tasty food",
        dates_done: []
      }
    };
    expect(goalsReducer(initialState, action)).toEqual(nextState);
  });

  it("should update an existing goal by removing a date done", () => {
    const initialState = [
      {
        id: "eat-food",
        name: "Eat food",
        dates_done: ["2019-03-03"]
      }
    ];
    const nextState = [
      {
        id: "eat-food",
        name: "Eat tasty food",
        dates_done: []
      }
    ];
    const action = {
      type: types.UPDATE_GOAL_SUCCESS,
      goal: {
        id: "eat-food",
        name: "Eat tasty food",
        dates_done: []
      }
    };
    expect(goalsReducer(initialState, action)).toEqual(nextState);
  });

  it("should update an existing goal by adding a date done", () => {
    const initialState = [
      {
        id: "eat-food",
        name: "Eat food",
        dates_done: []
      }
    ];
    const nextState = [
      {
        id: "eat-food",
        name: "Eat tasty food",
        dates_done: ["2019-03-03"]
      }
    ];
    const action = {
      type: types.UPDATE_GOAL_SUCCESS,
      goal: {
        id: "eat-food",
        name: "Eat tasty food",
        dates_done: ["2019-03-03"]
      }
    };
    expect(goalsReducer(initialState, action)).toEqual(nextState);
  });

  it("should delete a goal", () => {
    const initialState = [
      {
        _id: "brush-my-teeth",
        name: "Brush my teeth",
        dates_done: ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04"]
      },
      {
        _id: "eat-food",
        name: "Eat food",
        dates_done: ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04"]
      }
    ];
    const nextState = [
      {
        _id: "brush-my-teeth",
        name: "Brush my teeth",
        dates_done: ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04"]
      }
    ];
    const action = {
      type: types.DELETE_GOAL_SUCCCESS,
      goalId: "eat-food"
    };
    expect(goalsReducer(initialState, action)).toEqual(nextState);
  });
});
