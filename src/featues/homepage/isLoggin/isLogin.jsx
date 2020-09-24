import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import LeftBlockHTML from '../LeftBlock/leftBlock';
import Login from '../login/login';
import Registration from '../registr/registration';
import Editor from '../Editor/editor';
import ClassComponent from '../../movie/FullMovieDescription/movieDescription';
import Actor from '../Actor/actor';

class IsLogged extends Component {
    render() {
        const isLogin = this.props.isLogined;

        if (isLogin === null || isLogin === false) {
            return (
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                    <Redirect to="/login" />
                </Switch>
            );
        };

        if (isLogin === true) {
            return (
                <Switch>
                    <Route path="/movies" component={LeftBlockHTML}/>
                    <Route path="/description" component={ClassComponent}/>
                    <Route path="/actor" component={Actor}/>
                    <Route path="/editor" component={Editor}/>
                    <Redirect to="/movies" />
                </Switch>
            )
            
        }
        return <div></div>
    }
}

export default connect(mapState, mapDispatch)(IsLogged)