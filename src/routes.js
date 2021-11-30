import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Main from './pages/Main'
import EventDetail from './pages/EventDetail'
import Ticket from './pages/Ticket'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterEvents from './pages/admin/RegisterEvents'
import PromoterList from './pages/admin/PromoterList'
import RegisterPromoters from './pages/admin/RegisterPromoters'
import ProtectedRoute from './services/ProtectedRoute'

export default function Reoutes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/event/:id" exact component={EventDetail} />
            <Route path="/ticket/:id" exact component={Ticket} />
            <ProtectedRoute path="/event" exact component={RegisterEvents}/>
            <ProtectedRoute path="/promoter" exact component={PromoterList}/>
            <ProtectedRoute path="/add-promoter" exact component={RegisterPromoters}/>
        </BrowserRouter>
    )
}