import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as goalsActions from "../../actions/goalsActions";
import ManageGoalList from "./ManageGoalList";
import { toast } from "react-toastify";

class ManageGoalsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValue: "",
      saving: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ fieldValue: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ saving: true, fieldValue: "" });
    this.props.actions.createGoal({ name: this.state.fieldValue }).then(() => {
      toast.success("Goal created!");
      this.setState({ saving: false });
    });
    event.preventDefault();
  }

  handleDelete(goal) {
    this.props.actions.deleteGoal(goal._id).then(() => {
      toast.info(`Deleted "${goal.name}"`);
    });
    // event.preventDefault();
  }

  render() {
    let { goals } = this.props;
    return (
      <div>
        <h1 className="text-light">Goals</h1>
        <ManageGoalList
          goals={goals}
          onGoalDelete={this.handleDelete}
          handleChange={this.handleChange}
          fieldValue={this.state.fieldValue}
          handleSubmit={this.handleSubmit}
          saving={this.state.saving}
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
