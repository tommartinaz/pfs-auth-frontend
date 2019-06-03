import _ from 'lodash';
import { FETCH_SESSIONS, CREATE_SESSION } from '../types';

const INITIAL_STATE = {
    sessions: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_SESSIONS:
            return { ...state, sessions: action.payload };
        case CREATE_SESSION:
            return { ...state, sessions: [ ...state.sessions, action.payload ]}
        default:
            return state;
    }
}