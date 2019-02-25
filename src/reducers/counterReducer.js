import * as types from '../actions/actionTypes';

export default function counterReducer(state = [], action) {
    switch(action.type) {
        case types.COUNTER_CLICKED:
            return clickCounter(state, action);

        default:
            return state;
    }
};


 function clickCounter(counterState, action){
        const found = counterState.find( x => {
           return x.name === action.counter.name;
        })
        let newCounters;
        if(found) {
            newCounters = counterState.map( x => {
                if(x.name === action.counter.name) {
                    return {
                        name: x.name,
                        clicks: x.clicks + 1
                    };
                } 
                return x;
            });
        } else {
            let newItem = {
                name: action.counter.name,
                clicks: 1
            }
            newCounters = [...counterState, newItem];
        }

        return newCounters;
}