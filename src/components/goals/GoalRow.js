import React from 'react';

const GoalRow = (props) => {
    const { goal }  = props;
    let mostRecentDone = 'never';
    if(goal.dates_done.length > 0){
        mostRecentDone = goal.dates_done[goal.dates_done.length - 1];
    }
    return (
                                <tr key={goal.id} >
                                <td>
                                    <div className={"btn btn-goal-big " + (goal.done ? "btn-goal-done" : "btn-goal")} 
                                        onClick={props.onGoalToggle}>
                                        {goal.name}
                                    </div>
                                </td>
                                <td className="text-light h3">{goal.streak}</td>
                                <td className="text-light">
                                <p className='font-weight-bold'>
                                    {goal.done ? 'Yes!' : 'Not yet!'}
                                </p>
                                <p>
                                    Done: {mostRecentDone}
                                </p>
                                </td>
                            </tr>
    );

}

export default GoalRow;