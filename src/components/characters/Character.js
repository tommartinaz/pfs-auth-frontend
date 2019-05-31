import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from '../../redux/actions/characterActions';

class Character extends Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.match.params.characterId);
    }

    render() {
        return !this.props.character ? <div>Loading...</div> :
            <div>{this.props.character.name}</div>
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

export default connect(mapStateToProps, { fetchCharacter })(Character);