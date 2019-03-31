import React from "react";
import { Link } from "react-router-dom";
import {
  calculateCurrentStreak,
  calculateBestStreak,
  currentDateTime,
  prettyDisplayTime,
  isSameDay
} from "../../utils/timeFormatter";
import GoalStatusBadge from "./GoalStatusBadge";

const GoalRow = props => {
  const { goal } = props;
  let mostRecentDone = "never";
  let doneToday = false;
  const today = currentDateTime();
  if (goal.dates_done.length > 0) {
    const mostRecentDoneTime = goal.dates_done[goal.dates_done.length - 1];
    mostRecentDone = prettyDisplayTime(mostRecentDoneTime);
    if (isSameDay(today, mostRecentDoneTime)) {
      doneToday = true;
    }
  }
  return (
    <tr key={goal._id}>
      <td>
        <div
          className={
            "goal-card btn btn-goal-big " +
            (doneToday ? "btn-goal-done" : "btn-secondary")
          }
        >
          <Link to={`/goals/${goal._id}`}>{goal.name}</Link>
        </div>
      </td>
      <td className="text-light h3">{calculateBestStreak(goal.dates_done)}</td>
      <td className="text-light h3">
        {calculateCurrentStreak(goal.dates_done, today)}
      </td>
      <td className="text-light" onClick={props.onGoalToggle}>
        <GoalStatusBadge done={doneToday} />
        <p>Most recently done: {mostRecentDone}</p>
      </td>
    </tr>
  );
};

export default GoalRow;
