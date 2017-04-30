import React,{ Component } from 'react'
import HomePage from '../container/HomePage'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

import {
    HashRouter as Router,
    Route
} from 'react-router-dom'

const Root = () => (
    <Router history={history}>
        <div>
            <Route exact path="/" component={HomePage}/>
        </div>
    </Router>
)

export default Root