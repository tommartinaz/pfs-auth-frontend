import pfsApi from '../../api';
import { FETCH_CHARACTERS, CREATE_CHARACTER, EDIT_CHARACTER, FETCH_CHARACTER, DELETE_CHARACTER } from "../types";

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

export const fetchCharacter = id => async dispatch => {
    const response = await pfsApi.get(`/api/characters/${id}`);
    dispatch({
        type: FETCH_CHARACTER,
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

export const editCharacter = formValues => async dispatch => {
    const response = await pfsApi.patch(`/api/characters/${formValues.id}`, formValues);
    dispatch({
        type: EDIT_CHARACTER,
        payload: response.data
    });
};

export const deleteCharacter = characterId => async dispatch => {
    await pfsApi.delete(`/api/characters/${characterId}`);
    dispatch({
        type: DELETE_CHARACTER,
        payload: characterId
    });
};
