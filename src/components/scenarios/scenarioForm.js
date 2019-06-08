import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    Button,
    Form,
    Icon
} from 'semantic-ui-react';

class ScenarioForm extends React.Component {
    renderInput = ({ input, label }) => {
        return (
            <Form.Input
                placeholder={label}
                label={label}
                { ...input }
            />
        );
    }

    renderCheckbox = ({ input, label, name }) => {
        return (
            <Form.Checkbox
                checked={!!input.value}
                name={name}
                label={label}
                onChange={(e, { checked }) => input.onChange(checked)}
            />
        )
    }

    renderTextArea = ({ input, label, placeholder }) => (
        <Form.TextArea 
            { ...input }
            label={label}
            placeholder={placeholder}
        />
    )

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        const { handleSubmit, pristine, reset } = this.props;
        return (
            <Form className='ui form' onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label='Scenario Title' />
                    <Form.Group>
                        <Field
                            name='season_number'
                            component={this.renderInput}
                            label='Season #'
                        />
                        <Field 
                            name='scenario_number'
                            component={this.renderInput}
                            label='Scenario #'
                        />
                        <Field 
                            name='low_level'
                            component={this.renderInput}
                            label='Low Level'
                        />
                        <Field 
                            name='high_level'
                            component={this.renderInput}
                            label='High Level'
                        />
                        <Field 
                            name='evergreen'
                            component={this.renderCheckbox}
                            label='Evergreen'
                        />
                    </Form.Group>
                    <Field
                        name='description'
                        component={this.renderTextArea}
                        label='Description'
                        placeholder='Enter the description here...'
                    />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Form.Group centered='true'>

                    <Button className="positive" animated='vertical' disabled={pristine}>
                        <Button.Content visible>Save</Button.Content>
                        <Button.Content hidden>
                            <Icon name='save' />
                        </Button.Content>
                    </Button>
                    <Button animated disabled={pristine} onClick={reset}>
                        <Button.Content visible>Reset</Button.Content>
                        <Button.Content hidden>
                            <Icon name='undo' />
                        </Button.Content>
                    </Button>
                    </Form.Group>
                    </div>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'scenarioForm'
})(ScenarioForm);