import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as goalsActions from "../../actions/goalsActions";
import GoalList from "./GoalList";

class GoalsPage extends React.Component {
  render() {
    let { goals, actions } = this.props;
    return (
      <div>
        <h1 className="text-light">Goals</h1>
        <GoalList goals={goals} onGoalToggle={actions.toggleGoal} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    goals: state.goals
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(goalsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalsPage);
