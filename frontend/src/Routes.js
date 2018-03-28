
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ContactUs from './components/pages/ContactUs'
import Objectives from './components/pages/Objectives'
import Students from './components/pages/Students'
import Classes from './components/pages/Classes'
import Index from './components/pages/Index'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/objectives" component={Objectives} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/classes" component={Classes} />

    </Switch>
)

export default Routes