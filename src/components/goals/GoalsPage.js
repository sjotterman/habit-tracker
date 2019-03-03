import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as goalsActions from '../../actions/goalsActions';
import GoalRow from './GoalRow';


class GoalsPage extends React.Component {

    render() {
        return (
            <div>
                <h1 className="text-light">Goals</h1>
                <div className="row">
                    <div className="text-light col-sm-4 col-m-4">
                        <table className="table">
                        <thead>
                                <tr className="text-light">
                                    <th scope="col">Goal</th>
                                    <th scope="col">Best Streak</th>
                                    <th scope="col">Current Streak</th>
                                    <th scope="col">Done?</th>
                                </tr>
                        </thead>
                        <tbody>

                            {this.props.goals.map((item, id) => {
                                return (
                                    <GoalRow goal={item} key={id} onGoalToggle={() => this.props.actions.toggleGoal(item.id)} />
                                );
                            })}
                        </tbody>
                        </table>
                    </div>
                </div>
                 
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage);