import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as goalsActions from "../../actions/goalsActions";
import ManageGoalList from "./ManageGoalList";

class ManageGoalsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ fieldValue: event.target.value });
  }

  handleSubmit(event) {
    this.props.actions.createGoal({ name: this.state.fieldValue });
    event.preventDefault();
  }

  render() {
    let { goals, actions } = this.props;
    return (
      <div>
        <h1 className="text-light">Goals</h1>
        <ManageGoalList
          goals={goals}
          onGoalDelete={actions.deleteGoal}
          handleChange={this.handleChange}
          fieldValue={this.state.fieldValue}
          handleSubmit={this.handleSubmit}
        />
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
)(ManageGoalsPage);
