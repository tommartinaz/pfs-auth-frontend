import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { 
    Button,
    Form,
    Grid,
    Icon,
} from 'semantic-ui-react';

class CharacterForm extends Component {

    renderInput = ({ input, label }) => {
        return (
            <Form.Input
                placeholder={label}
                {...input}
                label={label}
            />
        );
    }

    renderSelector = ({ input, label, selector }) => {
        const list = selector.map(el => {
            return (
                { key: el.id, text: el.name, value: el.id }
            );
        });
        return (
            <Form.Select
                label={label}
                name={input.name}
                onChange={(e, { value }) => input.onChange(value)}
                options={list}
                value={input.value}
            />
        );
    }

    renderCheckbox = ({ input, label, name}) => {
        return (
            <Form.Checkbox
                checked={!!input.value}
                name={name}
                label={label}
                onChange={(e, { checked }) => input.onChange(checked)}
            />
        )
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);;
    }

    render() {
        const { handleSubmit, pristine, reset, alignments, races, classes } = this.props;
        return (
            <Form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
                <Grid columns='equal'>
                    <Grid.Column>
                        <Field name="name" component={this.renderInput} label="Character Name"/>
                        <Field name="race_id" component={this.renderSelector} label="Race" selector={races} />
                        <Field name="class_id" component={this.renderSelector} label="Class" selector={classes} />
                        <Field name="alignment_id" component={this.renderSelector} label="Alignment" selector={alignments} />
                    </Grid.Column>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Field name="str" component={this.renderInput} label="STR" />
                            </Grid.Column>
                            <Grid.Column>
                                <Field name='int' component={this.renderInput} label='INT' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Field name="dex" component={this.renderInput} label="DEX" />
                            </Grid.Column>
                            <Grid.Column>
                                <Field name='wis' component={this.renderInput} label='WIS' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Field name="con" component={this.renderInput} label="CON" />
                            </Grid.Column>
                            <Grid.Column>
                                <Field name='cha' component={this.renderInput} label='cha' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid>
                <Field name='retired' id='retired' component={this.renderCheckbox} label='Retired' />
                <Grid centered>
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
                </Grid>
            </Form>
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