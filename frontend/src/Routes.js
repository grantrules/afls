
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ContactUs from './components/pages/ContactUs'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/contact-us" component={ContactUs} />
    </Switch>
)

export default Routes