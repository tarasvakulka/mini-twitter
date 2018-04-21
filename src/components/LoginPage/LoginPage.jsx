import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {addUser} from "../../actions";
import {connect} from "react-redux";
import uuid from 'uuid';

import './LoginPage.css';

class LoginPage extends Component {
    state = {
      inputLogin: ''
    };

    render() {
        return (
            <div className="login-page container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-5">
                        <form>
                            <div className="form-group">
                                <label>Login</label>
                                <input type="text"
                                       value={this.state.value}
                                       className="form-control"
                                       placeholder="Enter login"
                                       onChange={this.handleInputLogin} />
                            </div>
                            <button className="btn btn-primary" onClick={this.handleSignIn}>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleInputLogin = (e) => {
        this.setState({inputLogin: e.target.value});
    }

    handleSignIn = () => {
        this.props.addUser({
            id: uuid(),
            username: this.state.inputLogin,
            avatar: 'https://robohash.org/newuser',
            tweets: []
        });
        this.props.history.push('/');
    }
}

LoginPage.propTypes = {
    addUser: PropTypes.func.isRequired
};

export default connect(
    null,
    {addUser}
)(LoginPage);