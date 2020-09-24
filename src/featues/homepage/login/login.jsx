import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import axios from 'axios';

class Login extends Component {

    async componentDidMount() {
        this.props.getUsersData();
    }

    render() {
        const auto = () => {
            const logingName = document.getElementById('loginName').value;
            const loginPassword = document.getElementById('loginPassword').value;
            
            this.props.allUsers.forEach(async (el) => {
                if (el.name === logingName) {
                    if (el.password === loginPassword) {
                        await axios.put('http://localhost:3000/isLogin', {
                            "log": true
                        });
                        this.props.getDataIsLogin();
                    };
                };
            });
        };

        return (
            <>
                <div className="loginReister">
                    <h3 className="loginReister_title">Please Login</h3>
                    <input type="text" placeholder="Enter your name" id="loginName" className="loginReister_input"/>
                    <input type="password" placeholder="Enter your password" id="loginPassword" className="loginReister_input"/>
                    <button onClick={auto} className="loginReister_button">Login</button>
                    <h3 className="loginReister_footer">Don't have an account? <NavLink to="/registration">Go to Register page</NavLink></h3>
                </div>
            </>
        );
    };
};

export default connect(mapState, mapDispatch)(Login);