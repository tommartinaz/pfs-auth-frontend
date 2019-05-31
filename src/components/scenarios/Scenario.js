import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/scenarioActions';

class Scenario extends Component {
    componentDidMount() {
        this.props.fetchScenario(this.props.match.params.scenarioId);
    }

    render() {
        return !this.props.scenario ? <div>Loading...</div> :
            <div>{this.props.scenario.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        scenario: state.scenarios[ownProps.match.params.scenarioId],
    };
};

export default connect(mapStateToProps, actions)(Scenario);