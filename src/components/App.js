import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/miscActions';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchAlignments();
        this.props.fetchClasses();
        this.props.fetchRaces();
    }
    render() {
        const { children } = this.props;
        return (
            <div className="ui container">
                <Header />
                {children}
            </div>
        );
    }
}

export default connect(null, actions)(App);
