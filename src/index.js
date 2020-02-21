import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Navigation from './Pages/Global/Navigation/Navigation'
import Login from './Pages/Login/LoginPage';
import Registration from './Pages/Registration/index'
import Profile from './Pages/Profile'
import Newsfeed from './Pages/Newsfeed'
import Chat from './Pages/Chat/Chat'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
<Provider store={configureStore()}>
    <Router>
            <Navigation />
        <Switch>
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Registration} />
            <Route path="/profile" component={Profile} />
            <Route path="/posts" component={Newsfeed} />
            <Route path="/messages" component={Chat} />
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
