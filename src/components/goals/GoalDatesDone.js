import React from "react";
import { statusByDate } from "../../utils/timeFormatter";

const GoalDatesDone = props => {
  const { datesDone } = props;
  const statuses = statusByDate(datesDone, datesDone[0]);
  return (
    <div className="container">
      {statuses.map((item, index) => {
        return (
          <div key={index} className="row justify-content-xs-center">
            <div className="col col-xs-3">{item.day}</div>
            <div className="col col-xs-3">
              {item.done ? (
                <span className="badge badge-success">Yes</span>
              ) : (
                <span className="badge badge-secondary">No</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GoalDatesDone;
