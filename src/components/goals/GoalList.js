import React from "react";
import GoalRow from "./GoalRow";

const GoalList = props => {
  let { goals, onGoalToggle } = props;
  return (
    <div className="row">
      <div className="text-light">
        <table className="table">
          <thead>
            <tr className="text-light">
              <th scope="col">Goal</th>

              <th scope="col">Best Streak</th>
              <th scope="col">Current Streak</th>
              <th scope="col">Done?</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((item, id) => {
              return (
                <GoalRow
                  goal={item}
                  key={id}
                  onGoalToggle={() => onGoalToggle(item.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoalList;
