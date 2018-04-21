import React, { Component } from 'react';
import PropTypes from "prop-types";

class ModalAddComment extends Component {

    render() {
        return (
            <div className="modal fade show" style={{display: this.props.isVisible ? 'block': 'none'}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Comment</h5>
                        </div>
                        <div className="modal-body">
                            <textarea cols="50" rows="8" onChange={this.props.onTextInput}></textarea>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={this.props.onCloseModal}>Close</button>
                            <button className="btn btn-primary" onClick={this.props.onAddComment}>Add Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ModalAddComment.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onTextInput: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    onAddComment: PropTypes.func.isRequired
};

export default ModalAddComment;