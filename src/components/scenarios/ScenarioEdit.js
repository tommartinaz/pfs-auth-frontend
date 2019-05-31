import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/scenarioActions';
import ScenarioForm from './scenarioForm';

class ScenarioEdit extends Component {
    componentDidMount() {
        this.props.fetchScenario(this.props.match.params.scenarioId);
    }

    onSubmit = formValues => {
        this.props.editScenario({ ...formValues, id: this.props.match.params.scenarioId }).then(this.props.history.push('/scenarios'));
    }

    render() {
        const { scenario } = this.props;
        if(!scenario) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>Edit {scenario.name}</h3>
                <ScenarioForm
                    onSubmit={this.onSubmit}
                    initialValues={scenario}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    scenario: state.scenarios[ownProps.match.params.scenarioId]
});

export default connect(mapStateToProps, actions)(ScenarioEdit);