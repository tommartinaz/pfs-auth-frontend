import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchCharacters } from '../../redux/actions/characterActions';
import requireAuth from '../requireAuth';

class Characters extends Component {
    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        return (
            <div>Character list</div>
        );
    }
}

const mapStateToProps = state => ({
    characterList: state.characters
});

export default compose(
    connect(mapStateToProps, { fetchCharacters }),
    requireAuth
)(Characters);
