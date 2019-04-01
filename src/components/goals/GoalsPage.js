import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as goalsActions from "../../actions/goalsActions";
import GoalList from "./GoalList";
import { toast } from "react-toastify";
import Spinner from "../shared/Spinner";

class GoalsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(goal) {
    this.setState({ saving: true });
    const timesDoneBefore = goal.dates_done.length;
    this.props.actions
      .toggleGoal(goal)
      .then(savedGoal => {
        const timesDoneAfter = savedGoal.dates_done.length;
        if (timesDoneAfter > timesDoneBefore) {
          toast.success(`"${goal.name}" marked complete!`);
        } else {
          toast.info(`"${goal.name}" marked incomplete!`);
        }
        this.setState({ saving: false });
      })
      .catch(error => {
        this.setState({ saving: false });
        // should set this error in a flash message
        console.log(error);
      });
  }

  render() {
    let { goals } = this.props;
    return (
      <div>
        <h1 className="text-light">Goals</h1>
        {this.props.loading && !this.state.saving ? (
          <Spinner />
        ) : (
          <>
            <div>Click a goal name for more information</div>
            <GoalList goals={goals} onGoalToggle={this.handleToggle} />
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
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
)(GoalsPage);
