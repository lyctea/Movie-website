//前端的入口文件
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Route from './Router/route'
import store from './Reducer/store'

render(
    <Provider store={store}>
        <Route/>
    </Provider>,
    document.getElementById('app')
);