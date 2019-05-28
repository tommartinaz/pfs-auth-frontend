import { FETCH_ALIGNMENTS, FETCH_CLASSES, FETCH_RACES } from "../types";

const INITIAL_STATE = {
    alignments: [],
    classes: [],
    races: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ALIGNMENTS:
            return { ...state, alignments: action.payload };
        case FETCH_CLASSES:
            return { ...state, classes: action.payload };
        case FETCH_RACES:
            return { ...state, races: action.payload };
        default:
            return state;
    }
};