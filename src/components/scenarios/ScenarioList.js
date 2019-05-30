import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { fetchScenarios } from '../../redux/actions/scenarioActions';
import { scenarioTableColumns } from '../../shared/tableColumns';

class ScenarioList extends Component {
    componentDidMount() {
        this.props.fetchScenarios();
    }

    render() {
        return (
            <div>
                <ReactTable 
                    data={this.props.scenarios}
                    columns={scenarioTableColumns}
                    filterable={true}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    scenarios: Object.values(state.scenarios)
});

export default connect(mapStateToProps, { fetchScenarios })(ScenarioList);