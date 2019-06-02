import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { Button, Table, Select, Input } from 'semantic-ui-react';
import { fetchScenarios } from '../../redux/actions/scenarioActions';
import { scenarioTableColumns } from '../../shared/tableColumns';

class ScenarioList extends Component {
    state = {
        selectedSeason: ''
    }
    componentDidMount() {
        this.props.fetchScenarios();
    }

    filterScenariosBySeason = (scenarios) => {
        const { selectedSeason } = this.state;
        if(selectedSeason) {
            return scenarios.filter(scenario => scenario.season_number === selectedSeason);
        } else {
            return scenarios;
        }
    }

    renderSelector = () => {
        const { scenarios } = this.props;
        const seasonsList = [
            { key: 'all', text: 'All', value: '' },
            { key: 0, text: 'Season 0', value: 0 }
        ];
        const latestSeason = scenarios.length ? scenarios[scenarios.length-1].season_number : 11;
        for(let i = 1; i <= latestSeason; i++) {
            seasonsList.push({ key: i, text: `Season ${i}`, value: i });
        }
        return (
            <Select
                placeholder='Filter by Season'
                options={seasonsList}
                onChange={(e, { value }) => this.setState({ selectedSeason: value })}
            />
        )
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>

                    {this.renderSelector()}
                    <Link to='/scenarios/new' className='ui button green'>Create a new scenario</Link>
                </div>
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