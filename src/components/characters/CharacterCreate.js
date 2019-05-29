import React from 'react';
import { connect } from 'react-redux';
import { createCharacter } from '../../redux/actions/characterActions';
import CharacterForm from './CharacterForm';

const CharacterCreate = props => {
    const onSubmit = formValues => {
        props.createCharacter(formValues);
        props.history.push('/characters');
    }

    return (
        <div>
            <h3>Create a character</h3>
            <CharacterForm
                onSubmit={onSubmit}
            />
        </div>
    );
}

export default connect(null, { createCharacter })(CharacterCreate);