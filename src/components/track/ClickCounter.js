import React from 'react';

const ClickCounter = (props) => {
    return (
        <div>
            <div className='btn btn-primary' onClick={props.onCounterClick}>Click me!</div>
            <div>{props.counter}</div>
        </div>

    );

}

export default ClickCounter;