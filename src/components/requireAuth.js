import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            console.log(this.props.auth);
            return <ChildComponent { ...this.props } />;
        }
    }

    const mapStateToProps = state => {
        console.log("APP STATE", state)
        return {
            auth: state.auth.authenticated
        };
    };

    return connect(mapStateToProps)(ComposedComponent);
}