import * as types from "../actionTypes";
import * as actions from "../goalsActions";
import * as timeFormatter from "../../utils/timeFormatter";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Goals Actions", () => {
  describe("Helper functions", () => {
    it("Should toggle an incomplete goal to be complete", () => {
      const beforeGoal = {
        _id: "goalId",
        dates_done: ["2019-04-04"]
      };
      const goalDoneDate = "2019-03-03";
      const afterGoal = {
        _id: "goalId",
        dates_done: [goalDoneDate, "2019-04-04"]
      };
      expect(actions.markGoalComplete(beforeGoal, goalDoneDate)).toEqual(
        afterGoal
      );
    });

    it("Should toggle a complete goal to be incomplete", () => {
      const goalDoneDate = "2019-03-03T12:00:00";
      const alreadyDoneDate = "2019-03-03T11:00:00";
      const beforeGoal = {
        _id: "goalId",
        dates_done: [alreadyDoneDate, "2019-04-04"]
      };
      const afterGoal = {
        _id: "goalId",
        dates_done: ["2019-04-04"]
      };
      expect(actions.markGoalIncomplete(beforeGoal, goalDoneDate)).toEqual(
        afterGoal
      );
    });
  });

  describe("Action Creators", () => {
    it("should create an action on goal create success", () => {
      const newGoal = {
        name: "Foo Bar"
      };
      const expectedAction = {
        type: types.CREATE_GOAL_SUCCESS,
        goal: newGoal
      };

      expect(actions.createGoalSuccess(newGoal)).toEqual(expectedAction);
    });

    it("should create an action on goal update success", () => {
      const newGoal = {
        _id: "foo-bar",
        name: "Foo Bar"
      };
      const expectedAction = {
        type: types.UPDATE_GOAL_SUCCESS,
        goal: newGoal
      };

      expect(actions.updateGoalSuccess(newGoal)).toEqual(expectedAction);
    });
    it("should create an action to delete a goal", () => {
      const goalId = "fake-goal";
      const expectedAction = {
        type: types.GOAL_DELETED,
        goalId
      };

      // Need to fix this to work with the API
      //  expect(actions.deleteGoal(goalId)).toEqual(expectedAction);
    });

    it("should create an action to load all goals", () => {
      const goals = [
        {
          _id: "brush-my-teeth",
          name: "Brush my teeth",
          streak: 6,
          done: false,
          dates_done: ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04"]
        },
        {
          _id: "eat-food",
          name: "Eat food",
          streak: 6,
          done: true,
          dates_done: ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04"]
        }
      ];
      const expectedAction = {
        type: types.LOAD_GOALS_SUCCESS,
        goals
      };

      expect(actions.loadGoalsSuccess(goals)).toEqual(expectedAction);
    });
  });

  describe("Async actions", () => {
    afterEach(() => {
      fetchMock.restore();
    });
    describe("Load Goals Thunk", () => {
      it("should create BEGIN_API_CALL and LOAD_GOALS_SUCCESS when loading goals", () => {
        const goals = [
          {
            name: "Create a new Goal??!!!",
            done: true,
            dates_done: ["2019-03-21", "2019-03-21", "2019-03-21"],
            id: "brush-my-teeth"
          }
        ];
        fetchMock.getOnce("http://localhost:3001/goals", {
          body: goals,
          headers: { "content-type": "application/json" }
        });
        // types.BEGIN_API_CALL not yet implented
        // const expectedActions = [
        //   {type: types.BEGIN_API_CALL},
        //   {type: types.LOAD_GOALS_SUCCESS, goals}
        // ];
        const expectedActions = [{ type: types.LOAD_GOALS_SUCCESS, goals }];
        const store = mockStore({ goals: [] });
        return store.dispatch(actions.loadGoals()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe("Create Goals Thunk", () => {
      it("should create BEGIN_API_CALL and CREATE_GOAL_SUCCESS when creating a goal", () => {
        const goal = {
          name: "New Goal"
        };
        fetchMock.postOnce("http://localhost:3001/goals", {
          body: goal,
          headers: { "content-type": "application/json" }
        });
        // types.BEGIN_API_CALL not yet implented
        // const expectedActions = [
        //   {type: types.BEGIN_API_CALL},
        //   {type: types.LOAD_GOALS_SUCCESS, goals}
        // ];
        const expectedActions = [{ type: types.CREATE_GOAL_SUCCESS, goal }];
        const store = mockStore({ goals: [] });
        return store.dispatch(actions.createGoal(goal)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

      it("should create BEGIN_API_CALL and UPDATE_GOAL_SUCCESS when updating a goal", () => {
        const goal = {
          name: "Existing Goal",
          done: false,
          id: "existing-goal-id"
        };
        fetchMock.putOnce(`http://localhost:3001/goals/${goal._id}`, {
          body: goal,
          headers: { "content-type": "application/json" }
        });
        // types.BEGIN_API_CALL not yet implented
        // const expectedActions = [
        //   {type: types.BEGIN_API_CALL},
        //   {type: types.LOAD_GOALS_SUCCESS, goals}
        // ];
        const expectedActions = [{ type: types.UPDATE_GOAL_SUCCESS, goal }];
        const store = mockStore({ goals: [] });
        return store.dispatch(actions.updateGoal(goal)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe("Toggle Goals thunk", () => {
      it("Should create UPDATE_GOAL_SUCCESS when toggling a date complete", () => {
        const dateToToggle = "2019-02-02";
        const goalToToggle = {
          name: "Existing Goal",
          done: false,
          dates_done: [],
          _id: "existing-goal-id"
        };
        const modifiedGoal = {
          name: "Existing Goal",
          done: false,
          dates_done: [dateToToggle],
          _id: "existing-goal-id"
        };
        fetchMock.putOnce(`http://localhost:3001/goals/${goalToToggle._id}`, {
          body: modifiedGoal,
          headers: { "content-type": "application/json" }
        });
        // types.BEGIN_API_CALL not yet implented
        // const expectedActions = [
        //   {type: types.BEGIN_API_CALL},
        //   {type: types.LOAD_GOALS_SUCCESS, goals}
        // ];
        const expectedActions = [
          { type: types.UPDATE_GOAL_SUCCESS, goal: modifiedGoal }
        ];
        const store = mockStore({ goals: [goalToToggle] });
        return store
          .dispatch(actions.toggleGoal(goalToToggle, dateToToggle))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          });
      });

      it("Should create UPDATE_GOAL_SUCCESS when toggling today complete", () => {
        const dateToToggle = timeFormatter.currentDateTime();
        const goalToToggle = {
          name: "Existing Goal",
          done: false,
          dates_done: [],
          _id: "existing-goal-id"
        };
        const modifiedGoal = {
          name: "Existing Goal",
          done: false,
          dates_done: [dateToToggle],
          id: "existing-goal-id"
        };
        fetchMock.putOnce(`http://localhost:3001/goals/${goalToToggle._id}`, {
          body: modifiedGoal,
          headers: { "content-type": "application/json" }
        });
        // types.BEGIN_API_CALL not yet implented
        // const expectedActions = [
        //   {type: types.BEGIN_API_CALL},
        //   {type: types.LOAD_GOALS_SUCCESS, goals}
        // ];
        const expectedActions = [
          { type: types.UPDATE_GOAL_SUCCESS, goal: modifiedGoal }
        ];
        const store = mockStore({ goals: [goalToToggle] });
        return store.dispatch(actions.toggleGoal(goalToToggle)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

      it("Should create UPDATE_GOAL_SUCCESS when toggling a date incomplete", () => {
        const dateToToggle = "2019-02-02";
        const goalToToggle = {
          name: "Existing Goal",
          done: false,
          dates_done: [dateToToggle],
          _id: "existing-goal-id"
        };
        const modifiedGoal = {
          name: "Existing Goal",
          done: false,
          dates_done: [],
          _id: "existing-goal-id"
        };
        fetchMock.putOnce(`http://localhost:3001/goals/${goalToToggle._id}`, {
          body: modifiedGoal,
          headers: { "content-type": "application/json" }
        });
        // types.BEGIN_API_CALL not yet implented
        // const expectedActions = [
        //   {type: types.BEGIN_API_CALL},
        //   {type: types.LOAD_GOALS_SUCCESS, goals}
        // ];
        const expectedActions = [
          { type: types.UPDATE_GOAL_SUCCESS, goal: modifiedGoal }
        ];
        const store = mockStore({ goals: [goalToToggle] });
        return store
          .dispatch(actions.toggleGoal(goalToToggle, dateToToggle))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          });
      });
    });

    describe("Delete Goals thunk", () => {
      it("should create BEGIN_API_CALL and DELETE_GOAL_SUCCESS when deleting a goal", () => {
        const goalToDelete = {
          name: "Existing Goal",
          done: false,
          _id: "existing-goal-id"
        };
        fetchMock.deleteOnce(
          `http://localhost:3001/goals/${goalToDelete._id}`,
          {
            body: {},
            headers: { "content-type": "application/json" }
          }
        );
        // types.BEGIN_API_CALL not yet implented
        // const expectedActions = [
        //   {type: types.BEGIN_API_CALL},
        //   {type: types.LOAD_GOALS_SUCCESS, goals}
        // ];
        const expectedActions = [
          { type: types.DELETE_GOAL_SUCCCESS, goalId: goalToDelete._id }
        ];
        const store = mockStore({ goals: [goalToDelete] });
        return store.dispatch(actions.deleteGoal(goalToDelete._id)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
  });
});
