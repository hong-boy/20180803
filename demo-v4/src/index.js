import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import Root from './Root'
import store from './store/index'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/:filter?" component={Root}/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);