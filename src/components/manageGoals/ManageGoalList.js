import React from "react";
import ManageGoalRow from "./ManageGoalRow";

const GoalList = props => {
  let {
    goals,
    onGoalDelete,
    handleChange,
    fieldValue,
    handleSubmit,
    saving
  } = props;
  return (
    <div className="text-light">
      <table className="table">
        <thead>
          <tr className="text-light">
            <th scope="col">Goal</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {goals.map((item, id) => {
            return (
              <ManageGoalRow
                goal={item}
                key={id}
                onGoalDelete={() => onGoalDelete(item)}
              />
            );
          })}
          <tr>
            <td>
              <div className="text-light">
                <input
                  type="text"
                  id="newGoal"
                  name="newGoal"
                  placeholder="New goal"
                  onChange={handleChange}
                  value={fieldValue}
                />
              </div>
            </td>
            <td>
              <div
                className="btn btn-primary"
                disabled={saving}
                onClick={handleSubmit}
              >
                {saving ? "Saving..." : "Add"}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GoalList;
