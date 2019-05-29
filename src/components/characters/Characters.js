import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { fetchCharacters } from '../../redux/actions/characterActions';
import requireAuth from '../requireAuth';
import { characterColumns } from './characterTableConfig';

class Characters extends Component {
    componentDidMount() {
        this.props.fetchCharacters();
    }

    populateCharacterDetails() {
        const { races, alignments, classes } = this.props.characterOptions;
        if(Object.keys(races).length && Object.keys(alignments).length && Object.keys(classes).length) {
            const updatedCharacters = this.props.characterList.map(character => {
                return {
                    ...character,
                    race: races[character.race_id].name,
                    alignment: alignments[character.alignment_id].name,
                    charClass: classes[character.class_id].name
                }
            })
            return updatedCharacters;
        }
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/characters/new" className="ui button green">Create new character</Link>
                </div>
                <ReactTable
                    data={this.populateCharacterDetails()}
                    columns={characterColumns(this.props.characterOptions)}
                    filterable={true}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    characterList: Object.values(state.characters),
    characterOptions: state.characterOptions
});

export default compose(
    connect(mapStateToProps, { fetchCharacters }),
    requireAuth
)(Characters);
