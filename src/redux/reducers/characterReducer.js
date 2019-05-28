import { FETCH_CHARACTERS, CREATE_CHARACTER } from "../types";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return { ...state, myCharacters: action.payload };
        case CREATE_CHARACTER:
            return { ...state, myCharacters: [ ...state.myCharacters, action.payload ]};
        default:
            return state;
    }
}