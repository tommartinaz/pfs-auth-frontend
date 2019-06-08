import {
    FETCH_SCENARIOS,
    FETCH_SCENARIO,
    CREATE_SCENARIO,
    EDIT_SCENARIO,
    DELETE_SCENARIO,
    BASE_URL
} from '../types';

export const fetchScenarios = () => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/scenarios`);
    if(response.ok) {
        response.json().then(data => dispatch({
            type: FETCH_SCENARIOS,
            payload: data
        }));
    }
};

export const fetchScenario = id => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/scenarios/${id}`);
    if(response.ok) {
        response.json().then(data => dispatch({
            type: FETCH_SCENARIO,
            payload: data
        }));
    }
};

export const createScenario = scenario => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/scenarios`, {
        method: 'POST',
        body: JSON.stringify(scenario)
    });
    if(response.ok) {
        response.json().then(data => dispatch({
            type: CREATE_SCENARIO,
            payload: data
        }));
    }
};

export const editScenario = scenario => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/scenarios/${scenario.id}`, {
        method: 'PATCH',
        body: JSON.stringify(scenario)
    });
    if(response.ok) {
        response.json().then(data => {
            dispatch({
                type: EDIT_SCENARIO,
                payload: data
            })
        });
    }
};

export const deleteScenario = id => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/scenarios/${id}`, { method: 'DELETE' });
    if(response.ok) {
        dispatch({
            type: DELETE_SCENARIO,
            payload: id
        });
    }
};