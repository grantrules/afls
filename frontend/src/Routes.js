
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ContactUs from './components/pages/ContactUs'
import Objectives from './components/pages/Objectives'
import Students from './components/pages/Students'
import Classes from './components/pages/Classes'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/objectives" component={Objectives} />
        <Route path="/students" component={Students} />
        <Route path="/classes" component={Classes} />

    </Switch>
)

export default Routes