import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/scenarioActions';
import ScenarioForm from './scenarioForm';

const ScenarioCreate = props => {
    const onSubmit = formValues => {
        props.createScenario(formValues);
        props.history.push('/scenarios');
    }

    return (
        <div>
            <h3>Create a new scenario</h3>
            <ScenarioForm onSubmit={onSubmit} />
        </div>
    );
}

export default connect(null, actions)(ScenarioCreate);