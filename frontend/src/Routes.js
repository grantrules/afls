
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Login from './components/pages/Login'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
    </Switch>
)

export default Routes