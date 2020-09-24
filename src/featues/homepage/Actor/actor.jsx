import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import Footer from '../Footer/footer';
import LogoutButton from '../../../utils/logoutButton/logoutButton';

class Actor extends Component {
    render() {
        const block = this.props.currentActor;

        if (block.length !== 0) {
            return (
                <>
                    <LogoutButton />
                    <div className="container">
                        <div className="row">
                            <div className="homepage_right-block">
                                <div className="homepage_right-block-rating">
                                    <div className="homepage_buttons">
                                        <button onClick={this.props.back} className="homepage_buttons-element">BACK</button>
                                    </div>
                                </div>
                                <div className="homepage_right-block-details">
                                    <img alt="posterImg" className="homepage_right-block-details-image" src={block.imgUrl}/>
                                    <h4 className="homepage_right-block-details-director"><b>Name:</b> {block.name}</h4>
                                    <h4 className="homepage_right-block-details-description"><b>Biography:</b> {block.biography}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            );   
        };
        return <Redirect to="/movies"/>;
    };
};

export default connect(mapState, mapDispatch)(Actor);