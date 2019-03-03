import * as actions from '../../actions/actionTypes';
import reducer from '../index';
// import counterReducer from '../counterReducer';
// import reducer from '../counterReducer';
import { types } from 'util';

describe('goals reducer', () => {
    // it('should return the initial state', () => {
    //     expect(reducer(undefined, {})).toEqual(
    //       []
    //       )
    //   });

    
    it('should handle GOAL_TOGGLED to true ', () => {
      const initialState = 
      {
      counters: [],
      goals:
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: false,
                last_done: 'two days ago'
            },
        ]
      };
      const nextState = 
      {
      counters: [],
      goals:
         [
            {
                id: 'brush-my-teeth',
                name: 'Brush my teeth',
                streak: 6,
                done: true,
                last_done: 'two days ago'
            },
        ]
      };
      const action = {
        type: actions.GOAL_TOGGLED,
        goalId: 'brush-my-teeth',
      };
        expect(reducer(initialState, action)).toEqual(
          nextState
          )
      });
});