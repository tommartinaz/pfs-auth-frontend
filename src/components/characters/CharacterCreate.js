import React from 'react';
import { connect } from 'react-redux';
import CharacterForm from './CharacterForm';

const CharacterCreate = props => {
    const onSubmit = formValues => {
        console.log("CREATE COMP", formValues);
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

export default CharacterCreate;