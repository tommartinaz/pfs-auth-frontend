import { FETCH_ALIGNMENTS, FETCH_CLASSES, FETCH_RACES } from "../types";
import _ from 'lodash';

const INITIAL_STATE = {
    alignments: {},
    classes: {},
    races: {}
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ALIGNMENTS:
            return { ...state, alignments: _.mapKeys(action.payload, 'id') };
        case FETCH_CLASSES:
            return { ...state, classes: _.mapKeys(action.payload, 'id') };
        case FETCH_RACES:
            return { ...state, races: _.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
};