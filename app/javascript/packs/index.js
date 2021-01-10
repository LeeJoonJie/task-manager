// Run this code by adding <%= javascript_pack_tag 'index' %> to the head of your layout file,

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app'
import { BrowserRouter as Router, Route } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Router>
            <Route path="/" component={App} />
        </Router>,
        document.body.appendChild(document.createElement('div')),
    )
})