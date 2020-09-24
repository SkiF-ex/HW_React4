import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { mapState, mapDispatch } from '../../../core/maps';
import MiniMovieHTML from '../../movie/MiniMovieDescription/movieDescription';
import Footer from '../Footer/footer';
import LogoutButton from '../../../utils/logoutButton/logoutButton';

class LeftBlockHTML extends Component {
    render() {
        return (
            <>
                <LogoutButton />
                <div className="container">
                    <div className="row">
                        <div className="homepage_left-block">
                            <div className="homepage_left-block-filters">
                                <div className="homepage_left-block-filters-item">
                                    <h4 className="homepage_left-block-filters-item-title">Sort movies</h4>
                                </div>
                                <div className="homepage_left-block-filters-item">
                                    <button onClick={this.props.sortByLike} className="homepage_left-block-filters-item-button">by likes</button>
                                    <button onClick={this.props.sortByStars} className="homepage_left-block-filters-item-button">by rating</button>
                                </div>
                                <div className="homepage_left-block-filters-item">
                                    <input id="searchInput" className="homepage_left-block-filters-item-input" placeholder="search by name"/>
                                    <button onClick={this.props.searchByName} className="homepage_left-block-filters-item-search">Search</button>
                                    <button onClick={this.props.searchReset} className="homepage_left-block-filters-item-reset">Reset</button>
                                </div>
                            </div>
                            <div id="movieContainer" className="movieContainer">
                                <MiniMovieHTML />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    };
};

export default connect(mapState, mapDispatch)(LeftBlockHTML);