import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Form, Grid, Message, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import * as actions from '../../redux/actions/authActions';

class Signin extends Component {

    onSubmit = formValues => {
        console.log(formValues);
        this.props.signin(formValues, () => {
            this.props.history.push('/characters');
        });
    }

    renderInputField = ({ label, input, icon }) => {
        return (
            <Form.Input
                icon={icon}
                iconPosition='left'
                placeholder={label}
                {...input}
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
                            <Field name="email" component={this.renderInputField} label="E-mail address" icon='user' />
                            <Field name='password' component={this.renderInputField} label='Password' icon='lock' />
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