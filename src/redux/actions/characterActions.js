import { FETCH_CHARACTERS, CREATE_CHARACTER, EDIT_CHARACTER, FETCH_CHARACTER, DELETE_CHARACTER, BASE_URL } from "../types";

export const fetchCharacters = () => async dispatch => {
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'authorization': localStorage.getItem('token')
    // };

    const response = await fetch(`${BASE_URL}/api/characters`);
    if(response.ok) {
        response.json().then(data => dispatch({
            type: FETCH_CHARACTERS,
            payload: data
        }));
    }
};

export const fetchCharacter = id => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/characters/${id}`);
    if(response.ok) {
        response.json().then(data => dispatch({
            type: FETCH_CHARACTER,
            payload: data
        }));
    }
};

export const createCharacter = formValues => async dispatch => {
    const player_id = localStorage.getItem('playerId');
    const response = await fetch(`${BASE_URL}/api/characters`, {
        method: 'POST',
        body: JSON.stringify({ ...formValues, player_id })
    });
    if(response.ok) {
        response.json().then(data => dispatch({
            type: CREATE_CHARACTER,
            payload: data
        }));
    }
};

export const editCharacter = formValues => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/characters/${formValues.id}`, {
        method: 'PATCH',
        body: JSON.stringify(formValues)
    });
    if(response.ok) {
        response.json().then(data => dispatch({
            type: EDIT_CHARACTER,
            payload: data
        }));
    }
};

export const deleteCharacter = characterId => async dispatch => {
    const response = await fetch(`${BASE_URL}/api/characters/${characterId}`, {
        method: 'DELETE',
    });
    if(response.ok) {
        dispatch({
            type: DELETE_CHARACTER,
            payload: characterId
        });
    }
};
