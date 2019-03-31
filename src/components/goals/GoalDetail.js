import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Spinner from "../shared/Spinner";
import GoalDatesDone from "./GoalDatesDone";
import * as goalsActions from "../../actions/goalsActions";

class GoalDetail extends React.Component {
  render() {
    const { goal } = this.props;
    return (
      <div>
        <h1 className="text-light">Goal Detail</h1>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <div>{goal.name}</div>
            <GoalDatesDone datesDone={goal.dates_done} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    goal: state.goals.find(item => {
      return item._id === ownProps.match.params.goalId;
    }),
    goals: state.goals,
    loading: state.apiCallsInProgress > 0
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
)(GoalDetail);
