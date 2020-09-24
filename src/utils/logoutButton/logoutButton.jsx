import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { mapState, mapDispatch } from '../../core/maps';
import axios from 'axios';

class Logout extends Component {
    render() {
        const logout = async () => {
            await axios.put('http://localhost:3000/isLogin', {
                "log": false
            });
            this.props.getDataIsLogin();
        };

        return(
            <button onClick={logout} className="logout-button">LogOut</button>
        );
    };
};

export default connect(mapState, mapDispatch)(Logout)