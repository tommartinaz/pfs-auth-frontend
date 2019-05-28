import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/authActions';

class Signout extends Component {
    componentDidMount() {
        this.props.signout();
    }

    render() {
        return <div>Log in again to see your characters</div>
    }
}

export default connect(null, actions)(Signout);