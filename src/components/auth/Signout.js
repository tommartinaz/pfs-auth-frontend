import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/authActions';

class Signout extends Component {
    componentDidMount() {
        this.props.signout();
        this.props.history.push('/signin');
    }

    render() {
        return <div>Thank you for using the tool.</div>
    }
}

export default connect(null, actions)(Signout);