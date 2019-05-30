import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCharacter, fetchCharacter } from '../../redux/actions/characterActions';
import CharacterForm from './CharacterForm';

class CharacterEdit extends Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.match.params.characterId);
    }

    onSubmit = formValues => {
        this.props.editCharacter(formValues, this.props.match.params.id).then(this.props.history.push('/characters'))
    }

    render() {
        const { character } = this.props;
        if(!character) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>Edit {character.name}</h3>
                <CharacterForm
                    onSubmit={this.onSubmit}
                    initialValues={character}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    character: state.characters[ownProps.match.params.characterId],
});

export default connect(mapStateToProps, { fetchCharacter, editCharacter })(CharacterEdit);