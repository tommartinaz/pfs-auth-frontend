import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
// import _ from 'lodash';
import { fetchCharacters } from '../../redux/actions/characterActions';
import requireAuth from '../requireAuth';

class Characters extends Component {
    componentDidMount() {
        this.props.fetchCharacters();
    }

    renderTableRows() {
        const { races, alignments, classes } = this.props.characterOptions;
        const { characterList } = this.props;
        if(Object.keys(races).length && Object.keys(alignments).length && Object.keys(classes).length) {
            return characterList.map(character => {
                return (
                    <Table.Row key={character.id} className={character.retired ? 'negative' : 'positive'}>
                        <Table.Cell>{character.name}</Table.Cell>
                        <Table.Cell>{alignments[character.alignment_id].name}</Table.Cell>
                        <Table.Cell>{races[character.race_id].name}</Table.Cell>
                        <Table.Cell>{classes[character.class_id].name}</Table.Cell>
                        <Table.Cell>
                            <Link to={`/characters/${character.id}/edit`}>
                                <Button icon='edit' size='tiny' color='green' />
                            </Link>
                            <Link to={`/characters/${character.id}`}>
                                <Button icon='eye' size='tiny' color='blue' />
                            </Link>
                        </Table.Cell>
                    </Table.Row>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/characters/new" className="ui button green">Create new character</Link>
                </div>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Alignment</Table.HeaderCell>
                            <Table.HeaderCell>Race</Table.HeaderCell>
                            <Table.HeaderCell>Class</Table.HeaderCell>
                            <Table.HeaderCell>Manage</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderTableRows()}
                    </Table.Body>

                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const player_id = localStorage.getItem('playerId');
    return {
        characterList: Object.values(state.characters).filter(character => character.player_id === player_id),
        characterOptions: state.characterOptions
    };
}

export default compose(
    connect(mapStateToProps, { fetchCharacters }),
    requireAuth
)(Characters);
