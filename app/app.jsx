import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import MainContainer from 'MainContainer';
import Index from 'Index';
import Login from 'Login';
import Signup from 'Signup';
import authenticationReducer from 'AuthenticationReducer';

let store = createStore(authenticationReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={MainContainer}>
                <Route path="login" component={Login}/>
                <Route path="signup" component={Signup}/>
                <IndexRoute component={Index}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);