export default function counterReducer(state = [], action) {
    switch(action.type) {
        case 'COUNTER_CLICKED':
            return [...state,
            Object.assign({}, action.counter)
        ];

        default:
            return state;
    }
};