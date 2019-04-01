import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Spinner from "../shared/Spinner";
import { Link } from "react-router-dom";
import GoalDatesDone from "./GoalDatesDone";
import * as goalsActions from "../../actions/goalsActions";

class GoalDetail extends React.Component {
  render() {
    const { goal } = this.props;
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <h3>{goal.name}</h3>
            <div className="col-xs-2">
              <Link to="/goals" className="nav-link">
                <span className="badge badge-primary">
                  Return to Goals Page
                </span>
              </Link>
            </div>

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
