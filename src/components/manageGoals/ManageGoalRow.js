import React from "react";

const ManageGoalRow = props => {
  const { goal, onGoalDelete } = props;
  return (
    <tr key={goal._id}>
      <td>
        <div className="text-light">{goal.name}</div>
      </td>
      <td className="text-light">
        <div className="btn btn-danger" onClick={onGoalDelete}>
          Delete?
        </div>
      </td>
    </tr>
  );
};

export default ManageGoalRow;
