import _ from 'lodash';
import { FETCH_SCENARIOS, FETCH_SCENARIO, EDIT_SCENARIO, CREATE_SCENARIO, DELETE_SCENARIO } from '../types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_SCENARIOS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_SCENARIO:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_SCENARIO:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_SCENARIO:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_SCENARIO:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}