import React, { Component } from 'react';
import PropTypes from "prop-types";
import uuid from 'uuid';

import Tweet from '../Tweet/Tweet'
import './TweetList.css';

class TweetList extends Component {
    state = {
        tweetMessage: ''
    }

    render() {
        return (
            <div className="tweet-list">
                {
                    this.props.currentUser ?
                        <div className="row justify-content-center mt-2">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Write your tweet</span>
                                </div>
                                <textarea className="form-control"
                                          value={this.state.tweetMessage}
                                          onChange={this.handleMessageInput} />
                            </div>
                            <button className="btn btn-dark ml-2 my-4" onClick={this.handleSendTweet}>Send</button>
                        </div> : null
                }
                { this.getTweets() }
            </div>
        );
    }

    handleSendTweet = () => {
       this.props.onAddTweet({
           id: uuid(),
           username: this.props.currentUser.username,
           description: this.state.tweetMessage,
           comments: []
       });
        this.setState({tweetMessage: ''});
    }

    handleMessageInput = (e) => {
        this.setState({tweetMessage: e.target.value});
    }

    getTweets() {
        let tweets = [];
        this.props.users.forEach(user => {
            user.tweets.forEach(tweet => {
                tweets.push(<Tweet userlogo={user.avatar}
                                   username={user.username}
                                   key={tweet.id}
                                   tweetData={tweet}
                                   currentUser={this.props.currentUser}
                                   onAddComment={this.props.onAddComment}/>);
            });
        });
        return tweets;
    }
}

TweetList.propTypes = {
    users: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
    onAddComment: PropTypes.func.isRequired,
    onAddTweet: PropTypes.func.isRequired
};

export default TweetList;