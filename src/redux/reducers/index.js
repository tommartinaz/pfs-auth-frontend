import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import characters from './characterReducer';
import characterOptions from './miscReducer';
import scenarios from './scenarioReducer';
import sessions from './sessionReducer';

export default combineReducers({
    form: formReducer,
    auth,
    characters,
    characterOptions,
    scenarios,
    sessions
});