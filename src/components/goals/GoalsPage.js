import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as goalsActions from '../../actions/goalsActions';

const fakeGoals =  [
    {
        id: 'brush-my-teeth',
        name: 'Brush my teeth',
        streak: 6,
        done: 'Not yet',
        last_done: '6 hours ago'
    },
    {
        id: 'sit-with-my-feelings',
        name: 'Sit with my feelings',
        streak: 0,
        done: 'Yes!',
        last_done: ''
    },
    {
        id: 'think-about-other-people',
        name: 'Think about other people',
        streak: 6,
        done: 'Yes!',
        last_done: '20 minutes ago'
    }
]

class GoalsPage extends React.Component {

    constructor(props, context){
        super(props, context);

    }

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
                                    <th scope="col">Streak</th>
                                    <th scope="col">Done?</th>
                                </tr>
                        </thead>
                        <tbody>

                            {fakeGoals.map(item => {
                                return (
                                <tr key={item.id} >
                                    <td>
                                        <div className="btn btn-goal btn-goal-big">
                                            {item.name}
                                        </div>
                                    </td>
                                    <td className="text-light">{item.streak}</td>
                                    <td className="text-light">
                                    <p>
                                        {item.done}
                                    </p>
                                    <p>
                                        {item.last_done}
                                    </p>
                                    </td>
                                </tr>
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