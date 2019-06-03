import pfsApi from '../../api';
import { FETCH_RACES, FETCH_CLASSES, FETCH_ALIGNMENTS, FETCH_SESSIONS } from '../types';

export const fetchRaces = () => async dispatch => {
    const response = await pfsApi.get('/api/races');
    dispatch({
        type: FETCH_RACES,
        payload: response.data
    });
};

export const fetchAlignments = () => async dispatch => {
    const response = await pfsApi.get('/api/alignments');
    dispatch({
        type: FETCH_ALIGNMENTS,
        payload: response.data
    });
};

export const fetchClasses = () => async dispatch => {
    const response = await pfsApi.get('/api/classes');
    dispatch({
        type: FETCH_CLASSES,
        payload: response.data
    });
};