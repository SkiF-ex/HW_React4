import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import Footer from '../Footer/footer';
import LogoutButton from '../../../utils/logoutButton/logoutButton';

class Editor extends Component {
    render() {
        const block = this.props.selectedMovie;
        if (block.length !== 0) {
            return (
                <>
                    <LogoutButton />
                    <div className="editor">
                        <div className="editor_block">
                            <h3 id={block.id} className="editor_block-title">Title</h3>
                            <input id='title' defaultValue={block.title} placeholder="Enter title" className="editor_block-input"/>
                        </div>
                        <div className="editor_block">
                            <h3 className="editor_block-title">Img url</h3>
                            <input  id='imgUrl' defaultValue={block.posterUrl} placeholder="Enter img url" className="editor_block-input"/>
                        </div>
                        <div className="editor_block">
                            <h3 className="editor_block-title">Director</h3>
                            <input  id='director' defaultValue={block.director} placeholder="Enter director name" className="editor_block-input"/>
                        </div>
                        <div className="editor_block">
                            <h3 className="editor_block-title">Genres</h3>
                            <input  id='genres' defaultValue={block.genres} placeholder="Enter genres" className="editor_block-input"/>
                        </div>
                        <div className="editor_block">
                            <h3 className="editor_block-title">Description</h3>
                            <textarea  id='description' defaultValue={block.description} placeholder="Enter description" className="editor_block-textarea"/>
                        </div>
                        <div className="editor_block-buttons">
                            <NavLink to="/movies"><button onClick={this.props.editMovie} className="editor_block-buttons-element">Submit</button></NavLink>
                            <button onClick={this.props.back} className="editor_block-buttons-element">Go back</button>
                        </div>
                    </div>
                    <Footer />
                </>
            );
        };
        return <Redirect to="/movies"/>;
    };
};

export default connect(mapState, mapDispatch)(Editor);