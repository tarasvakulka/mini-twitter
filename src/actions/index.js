import apiUsers from '../api/users'
import * as types from '../constants/ActionTypes'

export const receiveUsers = () => {
    return {
        type: types.RECEIVE_USERS,
        payload: apiUsers
    };
};

export const addUser = (userData) => {
    return {
        type: types.ADD_USER,
        payload: userData
    };
};

export const addTweet = (userData) => {
    return {
        type: types.ADD_TWEET,
        payload: userData
    };
};

export const addComment = (commentData) => {
    return {
        type: types.ADD_COMMENT,
        payload: commentData
    };
};

