import * as types from '../../actions/actionTypes';
import goalsReducer from '../goalsReducer';

describe('goals reducer', () => {
    it('should return the initial state', () => {
        expect(goalsReducer(undefined, {})).toEqual(
          []
          )
      });

    it('should handle loading all goals', () => {
      const initialState = [];
      const allGoals =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: false,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04'
                ]
            },
            {
                id: 'eat-food',
                name: 'Eat food',
                streak: 6,
                done: true,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04'
                ]
            },
        ];
      const action = {
        type: types.LOAD_GOALS_SUCCESS,
        goals: allGoals
      };
        expect(goalsReducer(initialState, action)).toEqual(
          allGoals
          );
      });


    it('should handle GOAL_TOGGLED to true on new date ', () => {
      const testDate = '2019-02-05';
      const initialState =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: false,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04'
                ]
            },
        ];
      const nextState =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: true,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04',
                  testDate
                ]
            },
        ];
      const action = {
        type: types.GOAL_TOGGLED,
        goalId: 'brush-my-teeth',
        date: testDate
      };
        expect(goalsReducer(initialState, action)).toEqual(
          nextState
          )
      });

    it('should handle GOAL_TOGGLED to true on older date ', () => {
      const testDate = '2019-02-04';
      const initialState =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: false,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-05',
                  '2019-02-06'
                ]
            },
        ];
      const nextState =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: true,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  testDate,
                  '2019-02-05',
                  '2019-02-06'
                ]
            },
        ];
      const action = {
        type: types.GOAL_TOGGLED,
        goalId: 'brush-my-teeth',
        date: testDate
      };
        expect(goalsReducer(initialState, action)).toEqual(
          nextState
          )
      });

    it('should handle GOAL_TOGGLED to false ', () => {
      const testDate = '2019-02-05';
      const initialState =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: true,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04',
                  testDate
                ]
            },
        ];
      const nextState =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: false,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04',
                ]
            },
        ];
      const action = {
        type: types.GOAL_TOGGLED,
        goalId: 'brush-my-teeth',
        date: testDate
      };
        expect(goalsReducer(initialState, action)).toEqual(
          nextState
          )
      });

    it('should create a new goal', () => {
      const initialState = [
      ];
      const nextState =
         [
            {
                id: 'eat-food',
                name: 'Eat food',
                streak: 0,
                done: false,
                dates_done: [
                ]
            },
        ];
        const action = {
          type: types.GOAL_CREATED,
          goal: {
            id: 'eat-food',
            name: 'Eat food'
          },
        };
        expect(goalsReducer(initialState, action)).toEqual(
          nextState
        );

    });

      it('should delete a goal', () => {
      const initialState =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: false,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04'
                ]
            },
            {
                id: 'eat-food',
                name: 'Eat food',
                streak: 6,
                done: true,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04'
                ]
            },
        ];
      const nextState =
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: false,
                dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04'
                ]
            },
        ];
      const action = {
        type: types.GOAL_DELETED,
        goalId: 'eat-food'
      };
        expect(goalsReducer(initialState, action)).toEqual(
          nextState
          );
      });
});
