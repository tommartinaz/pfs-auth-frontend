import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Icon } from 'semantic-ui-react';
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
            <>
                <Header as='h3' icon textAlign='center'>
                    <Icon name='user' />
                    Edit {character.name}
                </Header>
                <CharacterForm
                    onSubmit={this.onSubmit}
                    initialValues={character}
                />
            </>

            // <div>
            //     <h3>Edit {character.name}</h3>
            //     <CharacterForm
            //         onSubmit={this.onSubmit}
            //         initialValues={character}
            //     />
            // </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    character: state.characters[ownProps.match.params.characterId],
});

export default connect(mapStateToProps, { fetchCharacter, editCharacter })(CharacterEdit);