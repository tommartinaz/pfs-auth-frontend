import pfsApi from '../../api';
import { AUTH_ERROR, AUTH_USER } from '../types';

export const signup = (formValues, callback) => async dispatch => {
    console.log("ACTION CREATOR", formValues, callback);
    try {
        const response = await pfsApi.post('/signup', formValues);
        console.log("RESP", response)
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('playerId', response.data.id);
        callback();
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
        const response = await pfsApi.post('/signin', formValues);
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('playerId', response.data.id);
        callback();
    }
    catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Wrong email or password' });
    }
};