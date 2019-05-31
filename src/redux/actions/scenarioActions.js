import pfsApi from '../../api';
import { FETCH_SCENARIOS, FETCH_SCENARIO, CREATE_SCENARIO, EDIT_SCENARIO, DELETE_SCENARIO } from '../types';

export const fetchScenarios = () => async dispatch => {
    const response = await pfsApi.get('/api/scenarios');
    dispatch({
        type: FETCH_SCENARIOS,
        payload: response.data
    });
};

export const fetchScenario = id => async dispatch => {
    const response = await pfsApi.get(`/api/scenarios/${id}`);
    dispatch({
        type: FETCH_SCENARIO,
        payload: response.data
    });
};

export const createScenario = scenario => async dispatch => {
    const response = await pfsApi.post('/api/scenarios', scenario);
    dispatch({
        type: CREATE_SCENARIO,
        payload: response.data
    });
};

export const editScenario = scenario => async dispatch => {
    const response = await pfsApi.patch(`/api/scenarios/${scenario.id}`, scenario);
    dispatch({
        type: EDIT_SCENARIO,
        payload: response.data
    });
};

export const deleteScenario = id => dispatch => {
    pfsApi.delete(`/api/scenarios/${id}`);
    dispatch({
        type: DELETE_SCENARIO,
        payload: id
    });
};