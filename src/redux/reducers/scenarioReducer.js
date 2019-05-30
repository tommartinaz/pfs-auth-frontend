import _ from 'lodash';
import { FETCH_SCENARIOS } from '../types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_SCENARIOS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}