import React from "react";
import {
  calculateCurrentStreak,
  calculateBestStreak,
  currentDateTime,
  prettyDisplayTime
} from "../../utils/timeFormatter";

const GoalRow = props => {
  const { goal } = props;
  let mostRecentDone = "never";
  let doneToday = false;
  const today = currentDateTime();
  if (goal.dates_done.length > 0) {
    const mostRecentDoneTime = goal.dates_done[goal.dates_done.length - 1];
    mostRecentDone = prettyDisplayTime(mostRecentDoneTime);
    if (today === mostRecentDone) {
      doneToday = true;
    }
  }
  return (
    <tr key={goal._id}>
      <td>
        <div
          className={
            "btn btn-goal-big " + (goal.done ? "btn-goal-done" : "btn-goal")
          }
          onClick={props.onGoalToggle}
        >
          {goal.name}
        </div>
      </td>
      <td className="text-light h3">{calculateBestStreak(goal.dates_done)}</td>
      <td className="text-light h3">
        {calculateCurrentStreak(goal.dates_done, today)}
      </td>
      <td className="text-light">
        <p className="font-weight-bold">{doneToday ? "Yes!" : "Not yet!"}</p>
        <p>Most recently done: {mostRecentDone}</p>
      </td>
    </tr>
  );
};

export default GoalRow;
