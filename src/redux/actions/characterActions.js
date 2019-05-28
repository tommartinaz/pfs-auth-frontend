import pfsApi from '../../api';
import { FETCH_CHARACTERS, CREATE_CHARACTER } from "../types";

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
};

export const createCharacter = formValues => async dispatch => {
    const player_id = localStorage.getItem('playerId');
    const response = await pfsApi.post('/api/characters', { ...formValues, player_id });
    dispatch({
        type: CREATE_CHARACTER,
        payload: response.data
    });
};
