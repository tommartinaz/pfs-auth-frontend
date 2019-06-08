// import pfsApi from '../../api';
import { AUTH_ERROR, AUTH_USER, BASE_URL } from '../types';

export const signup = (formValues, callback) => async dispatch => {
    try {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            body: JSON.stringify(formValues)
        });
        if(response.ok) {
            response.json().then(data => {
                dispatch({
                    type: AUTH_USER,
                    payload: data.token
                })
                localStorage.setItem('token', data.token);
                localStorage.setItem('playerId', data.id);
            });
            callback();
        }
    }
    catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('playerId');
    return { type: AUTH_USER, payload: '' };
};

export const signin = (formValues, callback) => async dispatch => {
    try {
        const response = await fetch(`${BASE_URL}/signin`, {
            method: 'POST',
            body: JSON.stringify(formValues)
        });
        if(response.ok) {
            response.json().then(data => {
                dispatch({
                    type: AUTH_USER,
                    payload: data.token
                });
                localStorage.setItem('token', data.token);
                localStorage.setItem('playerId', data.id);
            });
            callback();
        }
    }
    catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Wrong email or password' });
    }
};