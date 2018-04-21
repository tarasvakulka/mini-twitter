import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {receiveUsers, addTweet, addComment} from '../../actions';

import TweetList from '../TweetList/TweetList';
import './HomePage.css';

class HomePage extends Component {

    render() {
        return (
            <div className="home-page">
                {
                    (this.props.users && this.props.users.length !== 0) ?
                        <TweetList
                            users={this.props.users}
                            currentUser={this.props.currentUser}
                            onAddTweet={this.props.addTweet}
                            onAddComment={this.props.addComment}
                        /> :
                        <div>Loading...</div>
                }
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.currentUser) this.props.receiveUsers();
    }
}

HomePage.propTypes = {
    users: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};

export default connect(
    state => ({
        users: state.users,
        currentUser: state.currentUser
    }),
    {receiveUsers, addTweet, addComment}
)(HomePage);