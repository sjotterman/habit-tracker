import React from 'react';
import {calculateCurrentStreak, calculateBestStreak, currentDateTime} from '../../utils/timeFormatter';

const GoalRow = (props) => {
    const { goal }  = props;
    let mostRecentDone = 'never';
    if(goal.dates_done.length > 0){
        mostRecentDone = goal.dates_done[goal.dates_done.length - 1];
    }
    let today = currentDateTime();
    return (
        <tr key={goal.id} >
            <td>
                <div className={"btn btn-goal-big " + (goal.done ? "btn-goal-done" : "btn-goal")}
                    onClick={props.onGoalToggle}>
                    {goal.name}
                </div>
            </td>
            <td className="text-light h3">{calculateBestStreak(goal.dates_done)}</td>
            <td className="text-light h3">{calculateCurrentStreak(goal.dates_done, today)}</td>
            <td className="text-light">
                <p className='font-weight-bold'>
                    {goal.done ? 'Yes!' : 'Not yet!'}
                </p>
                <p>
                    Most recently done: {mostRecentDone}
                </p>
            </td>
        </tr>
    );

}

export default GoalRow;