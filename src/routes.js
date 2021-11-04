import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Main from './pages/Main'
import EventDetail from './pages/EventDetail'
import Login from './pages/Login'
import RegisterEvents from './pages/admin/RegisterEvents'

export default function Reoutes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/event/:id" exact component={EventDetail} />
            <Route path="/login" exact component={Login} />
            <Route path="/add" exact component={RegisterEvents} />
        </BrowserRouter>
    )
}