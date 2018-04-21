import React, { Component } from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import users from '../../reducers/users';

import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import Navbar from '../Navbar/Navbar';

import './App.css';

let store = createStore(users, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                    </Switch>
                </div>
            </HashRouter>
        </Provider>
    );
  }
}

export default App;
