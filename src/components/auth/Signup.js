import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { signup } from '../../redux/actions/authActions';

class Signup extends Component {

    onSubmit = formValues => {
        this.props.signup(formValues, () => {
            this.props.history.push('/characters');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign Up</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage
});

export default compose(
    connect(mapStateToProps, { signup }),
    reduxForm({ form: 'signup' })
)(Signup);