import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        const isLoggedIn = this.props.authenticated ? true : false;
        return (
            <div className="ui inverted menu">
                <div className="right menu">
                    {this.props.authenticated ? 
                        <NavLink className="item yellow" activeClassName="active" to="/characters">Characters</NavLink> :
                        <NavLink className="item pink" activeClassName="active" to="/signup">Sign Up</NavLink>
                    }
                    <NavLink className="item green" activeClassName="active" to={isLoggedIn ? "/signout" : "/signin"}>Sign {isLoggedIn ? 'Out' : 'In'}</NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(Header);