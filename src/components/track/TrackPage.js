import React from 'react';
import ClickCounter from './ClickCounter';


class TrackPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            clickCounter: 0
        };
    }

    onCounterClick = () => {
    
        this.setState( (prevState) => {
            return {clickCounter: prevState.clickCounter + 1}
        }
        );
    }

    render() {
        return (
            <div>
                <h1>Track</h1>
                <ClickCounter 
                 counter={this.state.clickCounter} 
                 onCounterClick={this.onCounterClick} />
            </div>
        )
    }
}

export default TrackPage;