import * as actions from '../../actions/actionTypes';
import goalsReducer from '../goalsReducer';

describe('goals reducer', () => {
    it('should return the initial state', () => {
        expect(goalsReducer(undefined, {})).toEqual(
          []
          )
      });

    
    it('should handle GOAL_TOGGLED to true ', () => {
      const initialState = 
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: false,
                last_done: 'two days ago'
            },
        ];
      const nextState = 
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: true,
                last_done: 'two days ago'
            },
        ];
      const action = {
        type: actions.GOAL_TOGGLED,
        goalId: 'brush-my-teeth',
      };
        expect(goalsReducer(initialState, action)).toEqual(
          nextState
          )
      });

    it('should handle GOAL_TOGGLED to false ', () => {
      const initialState =
         [
            {
                id: 'eat-food',
                name: 'Eat Food',
                streak: 6,
                done: true,
                last_done: 'today'
            },
        ];
      const nextState =
         [
            {
                id: 'eat-food',
                name: 'Eat Food',
                streak: 6,
                done: false,
                last_done: 'today'
            },
        ];
      const action = {
        type: actions.GOAL_TOGGLED,
        goalId: 'eat-food',
      };
        expect(goalsReducer(initialState, action)).toEqual(
          nextState
          )
      });
});
