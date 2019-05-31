import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';


class CharacterForm extends Component {

    renderInput = ({ input, label }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input { ...input } autoComplete="off" />
            </div>
        );
    }

    renderSelector = ({ input, label, selector }) => {
        const list = selector.map(el => {
            return (
                <option key={el.id} value={el.id}>{el.name.toUpperCase()}</option>
            );
        });
        return (
            <div className="field">
                <label>{label}</label>
                <select {...input}>
                    <option value='' />
                    {list}
                </select>
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);;
    }

    render() {
        const { handleSubmit, pristine, reset, alignments, races, classes } = this.props;
        return (
            <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
                <div className="fields">
                    <div className="six wide field">
                        <Field name="name" component={this.renderInput} label="Character Name" />
                    </div>
                    <div className="six wide field">
                        <div className="fields">
                            <div className="three wide field">
                                <Field name="str" component={this.renderInput} label="STR" />
                            </div>
                            <div className="three wide field">
                                <Field name="dex" component={this.renderInput} label="DEX" />
                            </div>
                            <div className="three wide field">
                                <Field name="con" component={this.renderInput} label="CON" />
                            </div>
                            <div className="three wide field">
                                <Field name="int" component={this.renderInput} label="INT" />
                            </div>
                            <div className="three wide field">
                                <Field name="wis" component={this.renderInput} label="WIS" />
                            </div>
                            <div className="three wide field">
                                <Field name="cha" component={this.renderInput} label="CHA" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fields">
                    <div className="two wide field">
                        <Field name="race_id" component={this.renderSelector} label="Race" selector={races} />
                    </div>
                    <div className="two wide field">
                        <Field name="class_id" component={this.renderSelector} label="Class" selector={classes} />
                    </div>
                    <div className="two wide field">
                        <Field name="alignment_id" component={this.renderSelector} label="Alignment" selector={alignments} />
                    </div>
                </div>
                <button className="ui button primary" disabled={pristine}>Save</button>
                <button className="ui button" onClick={reset} disabled={pristine}>Reset</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    const { characterOptions } = state;
    const { races, classes, alignments } = characterOptions;
    return {
        alignments: Object.values(alignments),
        classes: Object.values(classes),
        races: Object.values(races)
    }
}
export default compose(
    connect(mapStateToProps),
    reduxForm({
        form: 'characterForm'
    })
)(CharacterForm);