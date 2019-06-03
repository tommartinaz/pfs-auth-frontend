import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table, Select } from 'semantic-ui-react';
import * as scenarioActions from '../../redux/actions/scenarioActions';
import * as sessionActions from '../../redux/actions/sessionActions';

class ScenarioList extends Component {
    state = {
        selectedSeason: ''
    }
    componentDidMount() {
        this.props.fetchScenarios();
        this.props.fetchSessions();
    }

    filterScenariosBySeason = (scenarios) => {
        const { selectedSeason } = this.state;
        const mappedScenarios = this.checkIfPlayedByPlayer();
        console.log(mappedScenarios)
        if(selectedSeason) {
            return mappedScenarios.filter(scenario => scenario.season_number === selectedSeason);
        } else {
            return mappedScenarios;
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

    checkIfPlayedByPlayer = () => {
        const { sessions, scenarios } = this.props;
        return scenarios.map(scenario => {
            return { ...scenario, played: sessions.filter(session => session.scenario_id === scenario.id).length > 0 }
        });
    }

    togglePlayed = scenario => {
        const player_id = localStorage.getItem('playerId');
        if(scenario.played) {
            console.log('Mark unplayed');
        } else {
            console.log('Mark played');
            this.props.createSession(player_id, scenario.id);
        }
    }

    renderTableRows() {
        const { scenarios, authenticated } = this.props;
        if(scenarios.length) {
            return this.filterScenariosBySeason(scenarios)
                .map(scenario => {
                    const { id, season_number, played, scenario_number, name, low_level, high_level } = scenario;
                    return (
                        <Table.Row key={id} className={played ? 'negative' : 'positive'}>
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
                                {authenticated && <Button icon='user' size='tiny' color='orange' onClick={() => this.togglePlayed(scenario)} />}
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

const mapStateToProps = state => {
    const player_id = localStorage.getItem('playerId');
    return {
        scenarios: Object.values(state.scenarios).sort((a, b) => a.season_number - b.season_number || a.scenario_number - b.scenario_number),
        sessions: state.sessions.sessions || [],
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, { ...scenarioActions, ...sessionActions })(ScenarioList);