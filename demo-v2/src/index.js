import React from 'react'
import ReactDom from 'react-dom'
import Root from './Root.js'
import {Provider} from 'react-redux'
import store from './store/index'
import {BrowserRouter, Route} from 'react-router-dom'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/:filter?" component={Root}/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);