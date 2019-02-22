export default function counterReducer(state = [], action) {
    switch(action.type) {
        case 'COUNTER_CLICKED':
        const found = state.find( x => {
           return x.name === action.counter.name;
        })
        let newState;
        if(found) {
            newState = state.map( x => {
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
            newState = [...state, newItem];
        }
            return newState;

        default:
            return state;
    }
};