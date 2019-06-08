import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/scenarioActions';
import { Button, Modal } from 'semantic-ui-react';

class Scenario extends Component {
    state = {
        modalOpen: false
    }

    componentDidMount() {
        this.props.fetchScenario(this.props.match.params.scenarioId);
    }

    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => {
        this.setState({ modalOpen: false });
    }

    deleteScenario = async () => {
        await this.props.deleteScenario(this.props.match.params.scenarioId);
        this.props.history.push('/scenarios');
    }

    render() {
        const { scenario } = this.props;
        if(!scenario) {
            return <div>Loading...</div>
        }
        return (
            <>
                <Modal
                    trigger={<Button onClick={this.handleOpen}>Delete</Button>}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    size='tiny'
                >
                    <Modal.Header>Delete {scenario.name}</Modal.Header>
                    <Modal.Description>
                        Are you sure you want to delete {scenario.name}?
                    </Modal.Description>
                    <Modal.Actions>
                        <Button color='red' onClick={this.deleteScenario}>Yes</Button>
                        <Button color='green' onClick={this.handleClose}>No</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        scenario: state.scenarios[ownProps.match.params.scenarioId],
    };
};

export default connect(mapStateToProps, actions)(Scenario);