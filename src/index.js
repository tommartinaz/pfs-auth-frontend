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
import Character from './components/characters/Character';
import ScenarioList from './components/scenarios/ScenarioList';
import Home from './components/Home';
import ScenarioCreate from './components/scenarios/ScenarioCreate';
import ScenarioEdit from './components/scenarios/ScenarioEdit';
import Scenario from './components/scenarios/Scenario';
import CharacterDelete from './components/characters/CharacterDelete';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/signin' component={Signin} />
                    <Route path='/signout' component={Signout} />
                    <Route path='/characters' exact component={Characters} />
                    <Route path='/characters/new' component={CharacterCreate} />
                    <Route path='/characters/:characterId' exact component={Character} />
                    <Route path='/characters/:characterId/edit' component={CharacterEdit} />
                    <Route path='/characters/:characterId/delete' component={CharacterDelete} />
                    <Route path='/scenarios' exact component={ScenarioList} />
                    <Route path='/scenarios/new' component={ScenarioCreate} />
                    <Route path='/scenarios/:scenarioId' exact component={Scenario} />
                    <Route path='/scenarios/:scenarioId/edit' component={ScenarioEdit} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)