import { FETCH_RACES, FETCH_CLASSES, FETCH_ALIGNMENTS, BASE_URL } from '../types';

export const fetchRaces = () => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/races`);
    if(response.ok) {
        response.json().then(data => dispatch({
            type: FETCH_RACES,
            payload: data
        }));
    }
};

export const fetchAlignments = () => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/alignments`);
    if(response.ok) {
        response.json().then(data => dispatch({
            type: FETCH_ALIGNMENTS,
            payload: data
        }));
    }
};

export const fetchClasses = () => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/classes`);
    if(response.ok) {
        response.json().then(data => dispatch({
            type: FETCH_CLASSES,
            payload: data
        }));
    }
};