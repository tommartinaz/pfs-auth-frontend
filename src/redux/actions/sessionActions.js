import pfsApi from '../../api';
import { FETCH_SESSIONS, CREATE_SESSION } from "../types";

export const fetchSessions = () => async dispatch => {
    const playerId = localStorage.getItem('playerId');
    const response = await pfsApi.get(`/api/sessions/${playerId}`);
    console.log(response);
    dispatch({
        type: FETCH_SESSIONS,
        payload: response.data
    });
};

export const createSession = (player_id, scenario_id) => async dispatch => {
    const response = await pfsApi.post('/api/sessions', { player_id, scenario_id });
    dispatch({
        type: CREATE_SESSION,
        payload: response.data
    });
}