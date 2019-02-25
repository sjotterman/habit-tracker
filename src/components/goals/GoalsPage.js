import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as goalsActions from '../../actions/goalsActions';


class GoalsPage extends React.Component {

    constructor(props, context){
        super(props, context);

    }

    render() {
        return (
            <div>
                <h1>Goals</h1>
                <div className="row">
                    <div className="col-sm-4 col-m-4">
                    Current Goals:
                        <ul className="list-group">
                            {this.props.goals.map(item => {
                                return <li className="list-group-item" key={item.name}>{item.name}</li>
                            })}
                        </ul>
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