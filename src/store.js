import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    {
        auth: {
            authenticated: localStorage.getItem('token')
        }
    },
    composeEnhancers(applyMiddleware(thunk))
);
