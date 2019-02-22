import React from 'react';
import ClickCounter from './ClickCounter';
import { connect } from 'react-redux';
import * as counterActions from '../../actions/counterActions';


class TrackPage extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            clickCounterA: 0,
            clickCounterB: 0
        };
    }

    onCounterAClick = (counter) => {
        let counterA = {name: 'A'};
        this.props.dispatch(counterActions.counterIncrement(counterA))
        this.setState( (prevState) => {
            return {clickCounterA: prevState.clickCounterA + 1}
        }
        );
    }

    onCounterBClick = () => {
        let counterB = {name: 'B'};
        this.props.dispatch(counterActions.counterIncrement(counterB))
        this.setState( (prevState) => {
            return {clickCounterB: prevState.clickCounterB + 1}
        }
        );
    }

    renderCounters(counters = []) {
        return counters.map(item => {
            return (<div id={item.name} key={item.name}>
                {item.name} : {item.clicks}
            </div>)
        })
    }

    render() {
        return (
            <div>
                <h1>Track</h1>
                <div className="row">
                <div className="col-sm-6 col-m-4">
                    <ClickCounter
                    counter={this.state.clickCounterA}
                    onCounterClick={this.onCounterAClick} />
                </div>
                <div className="col-sm-6 col-m-4">
                    <ClickCounter
                    counter={this.state.clickCounterB}
                    onCounterClick={this.onCounterBClick} />
                </div>
                <div className="col-sm-12 col-m-12">
                    <h1>Counters: {this.renderCounters(this.props.counters)}</h1>
                </div>
                </div>
                 
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        counters: state.counters
    }
}

//TODO: mapDispatchToProps
export default connect(mapStateToProps)(TrackPage);