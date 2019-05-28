import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
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
        const updatedCharacters = this.props.characterList.map(character => {
            return {
                ...character,
                race: races.find(race => race.id === character.race_id).name,
                alignment: alignments.find(alignment => alignment.id === character.alignment_id).name,
                charClass: classes.find(cclass => cclass.id === character.class_id).name
            }
        });
        return updatedCharacters;
    }

    render() {
        return (
            <div>
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
    characterList: state.characters.myCharacters || [],
    characterOptions: state.characterOptions
});

export default compose(
    connect(mapStateToProps, { fetchCharacters }),
    requireAuth
)(Characters);
