import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';

class Registration extends Component {
    render() {
        return (
            <div className="loginReister">
                <h3 className="loginReister_title">Please register</h3>
                <input type="text" placeholder="Enter your name" id="regName" className="loginReister_input"/>
                <input type="password" placeholder="Enter your password" id="regPassword" className="loginReister_input"/>
                <button onClick={this.props.registr} className="loginReister_button">Register</button>
                <h3 className="loginReister_footer">Already have account? <NavLink to="/login">Go to Login page</NavLink></h3>
            </div>
        );
    };
};

export default connect(mapState, mapDispatch)(Registration);