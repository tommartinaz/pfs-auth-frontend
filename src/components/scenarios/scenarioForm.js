import React from 'react';
import { reduxForm, Field } from 'redux-form';

class ScenarioForm extends React.Component {
    renderInput = ({ input, label }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input { ...input } autoComplete="off" />
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        const { handleSubmit, pristine, reset } = this.props;
        return (
            <form 
                className="ui form"
                onSubmit={handleSubmit(this.onSubmit)}
            >
                <div className="fields">
                    <div className="six wide field">
                        <Field name="name" component={this.renderInput} label="Scenario Title" />
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'scenarioForm'
})(ScenarioForm);