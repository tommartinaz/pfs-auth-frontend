import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import * as actions from '../../redux/actions/characterActions';

class Character extends Component {
    state = {
        modalOpen: false
    }

    componentDidMount() {
        this.props.fetchCharacter(this.props.match.params.characterId);
    }

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    deleteCharacter = () => {
        this.props.deleteCharacter(this.props.match.params.characterId);
        this.props.history.push('/characters');
    }

    render() {
        const { character } = this.props;
        if(!character) {
            return <div>Loading...</div>;
        }
        return (
            <>
            <div>{character.name}</div>
            <Button onClick={this.handleOpen}>Delete</Button>
            <Modal
                trigger={<Button onClick={this.handleOpen}>Modal Delete</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'
            >
                <Modal.Content>
                    <div>Are you sure you want to delete {character.name}?</div>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={this.deleteCharacter} inverted>
                        Yes
                    </Button>
                    <Button color='green' onClick={this.handleClose} inverted>
                        No
                    </Button>
                </Modal.Actions>
            </Modal>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        character: state.characters[ownProps.match.params.characterId],
        races: state.characterOptions.races,
        alignments: state.characterOptions.alignments,
        classes: state.characterOptions.classes
    };
};

export default connect(mapStateToProps, actions)(Character);