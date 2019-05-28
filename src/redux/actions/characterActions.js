import pfsApi from '../../api';
import { FETCH_CHARACTERS } from "../types";

export const fetchCharacters = () => async dispatch => {
    const headers = {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
    };

    const response = await pfsApi.get('/api/characters', {headers});
    dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data
    });
}