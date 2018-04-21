import {RECEIVE_USERS, ADD_USER, ADD_TWEET, ADD_COMMENT} from '../constants/ActionTypes'

const initialState = {
    users: [],
    currentUser: null
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                users: action.payload.users
              });
        case ADD_USER:
            let newUsers = state.users.slice();
            newUsers.push(action.payload);
            return Object.assign({}, state, {
                users: newUsers,
                currentUser: action.payload
            });
        case ADD_TWEET:
            let newUserTweet = state.users.map(user => {
                if (user.username === action.payload.username) {
                    user.tweets.push(action.payload);
                }
                return user;
            });
            return Object.assign({}, state, {
                users: newUserTweet
            });
        case ADD_COMMENT:
            let newTweetComment = state.users.map(user => {
                let tweets = user.tweets.map(tweet => {
                    if (tweet.id === action.payload.tweetId) {
                        tweet.comments.push({
                            id: action.payload.id,
                            username: action.payload.currentUser.username,
                            text: action.payload.text
                        });
                    }
                    return tweet;
                });
                user.tweets = tweets;
                return user;
            });
            return Object.assign({}, state, {
                users: newTweetComment
            });
        default:
            return state;
    }
};

export default users;