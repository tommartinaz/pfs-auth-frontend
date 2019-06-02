import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { Button, Table } from 'semantic-ui-react';
import { fetchScenarios } from '../../redux/actions/scenarioActions';
import { scenarioTableColumns } from '../../shared/tableColumns';

class ScenarioList extends Component {
    state = {
        season: ''
    }
    componentDidMount() {
        this.props.fetchScenarios();
    }

    filterScenariosBySeason = (scenarios) => {
        console.log(scenarios)
        if(this.state.season) {
            return scenarios.filter(scenario => scenario.season_number === this.state.season);
        } else {
            return scenarios;
        }
    }

    renderTableRows() {
        const { scenarios } = this.props;
        const { season } = this.state;
        if(scenarios.length) {
            return this.filterScenariosBySeason(scenarios)
                .map(scenario => {
                    const { id, season_number, scenario_number, name, low_level, high_level } = scenario;
                    return (
                        <Table.Row key={id}>
                            <Table.Cell>{season_number}</Table.Cell>
                            <Table.Cell>{scenario_number}</Table.Cell>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{low_level}</Table.Cell>
                            <Table.Cell>{high_level}</Table.Cell>
                            <Table.Cell>
                                <Link to={`/scenarios/${id}`}>
                                    <Button icon='eye' size='tiny' color='blue' />
                                </Link>
                                <Link to={`/scenarios/${id}/edit`}>
                                    <Button icon='edit' size='tiny' color='green' />
                                </Link>
                            </Table.Cell>
                        </Table.Row>
                    )
                })
        }
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.props.history.push(`/scenarios/new`)}>Create a new scenario</Button>
                {/* <ReactTable 
                    data={this.props.scenarios}
                    columns={scenarioTableColumns}
                    filterable={true}
                /> */}
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Season</Table.HeaderCell>
                            <Table.HeaderCell>Scenario</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Low Level</Table.HeaderCell>
                            <Table.HeaderCell>High Level</Table.HeaderCell>
                            <Table.HeaderCell>Manage</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderTableRows()}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    scenarios: Object.values(state.scenarios).sort((a, b) => a.season_number - b.season_number || a.scenario_number - b.scenario_number)
});

export default connect(mapStateToProps, { fetchScenarios })(ScenarioList);