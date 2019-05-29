import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/App';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Characters from './components/characters/Characters';
import CharacterCreate from './components/characters/CharacterCreate';
import CharacterEdit from './components/characters/CharacterEdit';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/signup' component={Signup} />
                    <Route path='/signin' component={Signin} />
                    <Route path='/signout' component={Signout} />
                    <Route path='/characters' exact component={Characters} />
                    <Route path='/characters/new' component={CharacterCreate} />
                    <Route path='/characters/:characterId/edit' component={CharacterEdit} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)