import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Main from './pages/Main'
import EventDetail from './pages/EventDetail'
import Login from './pages/Login'

export default function Reoutes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/:id" component={EventDetail} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    )
}