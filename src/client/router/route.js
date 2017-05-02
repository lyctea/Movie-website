import React,{ Component } from 'react'
import HomePage from '../container/HomePage'
import Detail from '../container/Detail'
import Classify from '../container/Classify'

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
            <Route path="/detail" component={Detail}/>
            <Route path="/classify" component={Classify}/>
        </div>
    </Router>
)

export default Root