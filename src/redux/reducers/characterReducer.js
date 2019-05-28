import { FETCH_CHARACTERS } from "../types";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return { ...state, myCharacters: action.payload };
        default:
            return state;
    }
}