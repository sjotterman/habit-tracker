import React from 'react';

const ManageGoalRow = (props) => {
    const { goal }  = props;
    return (
        <tr key={goal.id} >
            <td>
                <div className="text-light">{goal.name}</div>
            </td>
            <td className="text-light">
                <div className="btn btn-danger" onClick={() => alert(`This will delete "${goal.name}"`)}>Delete?</div>
            </td>
        </tr>
    );

}

export default ManageGoalRow;