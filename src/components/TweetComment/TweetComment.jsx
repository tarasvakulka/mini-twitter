import React, { Component } from 'react';
import PropTypes from "prop-types";

import './TweetComment.css';

class TweetComment extends Component {
    render() {
        let {username, text} = this.props;
        return (
            <li className="tweet-comment">
                <span>Username: @{username}</span>
                <div>{text}</div>
            </li>
        );
    }
}

TweetComment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default TweetComment;