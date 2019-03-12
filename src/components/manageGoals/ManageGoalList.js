import React from 'react';
import ManageGoalRow from './ManageGoalRow';

const GoalList = (props) => {
   let { goals, onGoalToggle } = props; 
    return (
        <div className="text-light">
            <table className="table">
            <thead>
                    <tr className="text-light">
                        <th scope="col">Goal</th>
                        <th scope="col"></th>
                    </tr>
            </thead>
            <tbody>
                {goals.map((item, id) => {
                    return (
                        <ManageGoalRow goal={item} key={id} onGoalToggle={() => onGoalToggle(item.id)} />
                    );
                })}
            <tr>
                <td>
                    <div className="text-light">
                        <input type="text" id='newGoal' name='newGoal' placeholder='New goal'></input>
                    </div>
                </td>
                <td>
                    <div className='btn btn-primary' onClick={() => alert('This will add a new goal')}>Add</div>

                </td>
            </tr>
            </tbody>
            </table>
        </div>
    );

}

export default GoalList;