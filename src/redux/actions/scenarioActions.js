import pfsApi from '../../api';
import { FETCH_SCENARIOS } from '../types';

export const fetchScenarios = () => async dispatch => {
    const response = await pfsApi.get('/api/scenarios');
    dispatch({
        type: FETCH_SCENARIOS,
        payload: response.data
    });
}