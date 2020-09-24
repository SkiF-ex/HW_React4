import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import starCount from '../../../utils/starCount/stars';
import currentActors from '../../../utils/CurrentActors/currentActors';
import LogoutButton from '../../../utils/logoutButton/logoutButton';

class ClassComponent extends Component {
    
    render() {
        const block = this.props.selectedMovie;
        if (block.length !== 0) {
            return (
                <>
                    <LogoutButton />
                    <div className="container">
                        <div className="row">
                            <div className="homepage_right-block">
                                <div className="homepage_right-block-rating">
                                    <h4 id={block.id} className="homepage_right-block-rating-title">{block.title}</h4>
                                    <h4 className="homepage_right-block-rating-likes">Likes: {block.likes}</h4>
                                    <div className={starCount(block.stars) + " homepage_right-block-rating-stars"}></div>
                                    <br></br>
                                    <div className="homepage_buttons">
                                        <NavLink to="/editor"><button className="homepage_buttons-element">EDIT</button></NavLink>
                                        <NavLink to="/movies"><button onClick={this.props.deleteData} className="homepage_buttons-element">DELETE</button></NavLink>
                                        <button onClick={this.props.back} className="homepage_buttons-element">BACK</button>
                                    </div>
                                </div>
                                <div className="homepage_right-block-details">
                                    <img alt="posterImg" className="homepage_right-block-details-image" src={block.posterUrl}/>
                                    <h4 className="homepage_right-block-details-director"><b>Director:</b> {block.director}</h4>
                                    <h4 className="homepage_right-block-details-actors"><b>Actors:</b> {
                                        currentActors(block, this.props.allActors).map((el, i) => (<NavLink onClick={this.props.selectActor} to="/actor" key={i}>{el + ' '}</NavLink>))}
                                    </h4>
                                    <h4 className="homepage_right-block-details-genres"><b>Genres:</b> {
                                        block.genres.map((el) => (el + '. '))}
                                    </h4>
                                    <h4 className="homepage_right-block-details-description"><b>Description:</b> {block.description}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        };
        return <Redirect to="/movies"/>;
    };
};

export default connect(mapState, mapDispatch)(ClassComponent);