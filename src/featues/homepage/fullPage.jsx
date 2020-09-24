import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomepageHeader from './Header/header.jsx';
import { mapState, mapDispatch } from '../../core/maps';

class FullPage extends Component {
    async componentDidMount() {
        this.props.getDataIsLogin()
        this.props.getFilms();
        this.props.getActors();
    };

    render() {
        const movies = this.props.allFilms;
        if (movies.length !== 0){
            return (
                <>
                    <HomepageHeader />
                </>
            );
        };
        return <div></div> 
    };
};

export default connect(mapState, mapDispatch)(FullPage);

