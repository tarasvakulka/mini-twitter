import React, { Component } from 'react';
import PropTypes from "prop-types";
import uuid from 'uuid';

import ModalAddComment from '../ModalAddComment/ModalAddComment';
import TweetComment from '../TweetComment/TweetComment';
import './Tweet.css';

class Tweet extends Component {
    state = {
        isCommentModal: false,
        commentText: '',
        isCommentsVisible: false
    }

    render() {
        let {username, userlogo, tweetData} = this.props;
        return (
            <div className="tweet card my-2">
                <div className="row">
                    <img className="col-3" src={userlogo} alt="user avatar"/>
                    <div className="card-body col-9 text-left">
                        <h5 className="card-title">@{username}</h5>
                        <p className="card-text">{tweetData.description}</p>
                        <p>
                            <button className="btn btn-light" onClick={this.handleCommentsShow}>View Comments</button>
                        </p>
                        {
                            this.state.isCommentsVisible ?
                            <div className="card card-body mb-2">
                                <ul className="p-0">
                                    {this.getComments()}
                                </ul>
                            </div> : null
                        }
                        <ModalAddComment isVisible={this.state.isCommentModal}
                                         onTextInput={this.handleInputText}
                                         onCloseModal={this.handleModal}
                                         onAddComment={this.handleComment.bind(this, tweetData.id)}/>
                        {
                            this.getAddCommnetButton()
                        }
                    </div>
                </div>
            </div>
        );
    }

    handleModal = () => {
        this.setState({isCommentModal: !this.state.isCommentModal});
    }

    handleComment = (tweetId) => {
        this.props.onAddComment({
            tweetId: tweetId,
            id: uuid(),
            text: this.state.commentText,
            currentUser: this.props.currentUser
        });
        this.setState({isCommentModal: !this.state.isCommentModal});
    }

    handleInputText = (e) => {
        this.setState({commentText: e.target.value});
    }

    handleCommentsShow = () => {
        this.setState({isCommentsVisible: !this.state.isCommentsVisible});
    }

    getComments = () => {
        return this.props.tweetData.comments.map(comment => <TweetComment key={comment.id}
                                                                          username={comment.username}
                                                                          text={comment.text} />);
    }

    getAddCommnetButton = () => {
        if (this.props.currentUser){
            return <button className="btn btn-primary" onClick={this.handleModal}>Add Comment</button>;
        } else {
            return null;
        }
    }

}

Tweet.propTypes = {
    userlogo: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    currentUser: PropTypes.object,
    tweetData: PropTypes.object.isRequired,
    onAddComment: PropTypes.func.isRequired
};

export default Tweet;