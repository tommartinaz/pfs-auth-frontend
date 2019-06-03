import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Form, Grid, Message, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import * as actions from '../../redux/actions/authActions';

class Signin extends Component {
    state = {
        password: true
    }

    onSubmit = formValues => {
        this.props.signin(formValues, () => {
            this.props.history.push('/characters');
        });
    }

    renderInputField = ({ label, input, icon, iconPosition, type }) => {
        return (
            <Form.Input
                icon={{ name: icon }}
                iconPosition={iconPosition}
                placeholder={label}
                {...input}
                type={type}
            />
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Log in to your account
                    </Header>
                    <Form onSubmit={handleSubmit(this.onSubmit)}>
                        <Segment>
                            <Field 
                                name="email"
                                component={this.renderInputField}
                                label="E-mail address"
                                icon='user'
                                iconPosition='right'
                                type='' />
                            <Field
                                name='password'
                                component={this.renderInputField}
                                label='Password'
                                icon='lock'
                                iconPosition='right'
                                type={this.state.password ? 'password' : 'text'}
                                action={() => this.setState({ password: !this.state.password })}
                            />
                            <Button color='teal' fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Link to='/signup'>Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage
});

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Signin);