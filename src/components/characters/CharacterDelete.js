import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/characterActions';
import Modal from '../Modal';

class CharacterDelete extends Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.match.params.characterId);
    }

    deleteCharacter = async id => {
        await this.props.deleteCharacter(id);
        this.props.history.push('/characters');
    }

    renderActions() {
        const { characterId } = this.props.match.params;
        return (
            <>
                <button className="ui button negative" onClick={() => this.deleteCharacter(characterId)}>Delete</button>
                <button className="ui button" onClick={() => this.props.history.goBack()}>Cancel</button>
            </>
        );
    }

    renderContent() {
        const { character } = this.props;
        return !character ? 
            'No character to delete' :
            `Are you sure you want to delete ${character.name}?`;
    }

    render() {
        return (
            <Modal
                title="Delete Character"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => this.props.history.goBack()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    character: state.characters[ownProps.match.params.characterId]
});

export default connect(mapStateToProps, actions)(CharacterDelete);
