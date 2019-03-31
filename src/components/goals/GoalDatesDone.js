import React from "react";
import { statusByDate } from "../../utils/timeFormatter";

const GoalDatesDone = props => {
  const { datesDone } = props;
  const statuses = statusByDate(datesDone, datesDone[0]);
  return (
    <div>
      {statuses.map((item, index) => {
        return (
          <div key={index} className="row">
            <div className="col-sm-6">{item.day}</div>
            <div className="col-sm-6">
              {item.done ? (
                <span className="badge badge-success">Yes</span>
              ) : (
                <span className="badge badge-info">No</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GoalDatesDone;
