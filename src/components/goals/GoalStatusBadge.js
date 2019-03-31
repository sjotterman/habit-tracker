import React from "react";

const GoalStatusBadge = props => {
  const { done } = props;
  return done ? (
    <h2>
      <span className="badge badge-success">Done!</span>
    </h2>
  ) : (
    <h2>
      <span className="badge badge-secondary">Click to mark done</span>
    </h2>
  );
};

export default GoalStatusBadge;
