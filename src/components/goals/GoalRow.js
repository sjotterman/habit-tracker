import React from 'react';

const GoalRow = (props) => {
    const { goal }  = props;
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
                                    {goal.last_done}
                                </p>
                                </td>
                            </tr>
    );

}

export default GoalRow;