import * as types from './actionTypes';

export function counterIncrement(counter) {
    return { type: types.COUNTER_CLICKED, counter}
}