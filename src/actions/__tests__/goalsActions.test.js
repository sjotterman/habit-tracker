 import * as types from '../actionTypes';
 import * as actions from '../goalsActions';
 import * as timeFormatter from '../../utils/timeFormatter';

 describe('Goals Actions', () => {
     it('should create an action to create a goal',  () => {
         const newGoal = {
             'id': 'foo-bar',
             'name': 'Foo Bar'
         };
         const expectedAction = {
             type: types.GOAL_CREATED,
             goal: newGoal
         }

         expect(actions.createGoal(newGoal)).toEqual(expectedAction);

     });
     
     it('should create an action to toggle a goal with explicit date', () => {
         const goalId = 'breathe';
         const date = '2019-02-04';
         const expectedAction = {
             type: types.GOAL_TOGGLED,
             goalId,
             date
         };

        expect(actions.toggleGoal(goalId, date)).toEqual(expectedAction);
     });

     it('should create an action to toggle a goal without explicit date', () => {
         const goalId = 'breathe';
         const currentFormattedDate = timeFormatter.formatDateShort(new Date());
         const expectedAction = {
             type: types.GOAL_TOGGLED,
             goalId,
             date: currentFormattedDate
         }

        expect(actions.toggleGoal(goalId)).toEqual(expectedAction);
     });

     it('should create an action to load all goals', () => {
      const goals =
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
         const expectedAction = {
             type: types.LOAD_GOALS_SUCCESS,
             goals
         }

        expect(actions.loadGoalsSuccess(goals)).toEqual(expectedAction);
     });

 });