import { FETCH_CHARACTERS, CREATE_CHARACTER, EDIT_CHARACTER, FETCH_CHARACTER } from "../types";
import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_CHARACTER: 
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_CHARACTER:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_CHARACTER:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}