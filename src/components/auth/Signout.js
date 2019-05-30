import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/authActions';

class Signout extends Component {
    componentDidMount() {
        this.props.signout();
        setTimeout(() => this.props.history.push('/'), 5000)
    }

    render() {
        return <div>Thank you for using the tool.</div>
    }
}

export default connect(null, actions)(Signout);