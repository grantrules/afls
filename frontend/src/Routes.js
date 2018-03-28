
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/pages/Home'
import ContactUs from './components/pages/ContactUs'
import Objectives from './components/pages/Objectives'
import Students from './components/pages/Students'
import Classes from './components/pages/Classes'
import Index from './components/pages/Index'

import Authorized from './auth/Authorized'

const Routes = () => (

    <div>
        <Authorized anonymous>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/contact-us" component={ContactUs} />
                <Route component={() => (<Redirect to="/"/>)}/>
            </Switch>
        </Authorized>

        <Authorized>
            <Switch>
                <Route exact path="/" component={() => (<Redirect to="/home"/>)} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/contact-us" component={ContactUs} />
                <Route exact path="/objectives" component={Objectives} />
                <Route exact path="/students" component={Students} />
                <Route exact path="/classes" component={Classes} />

            </Switch>
        </Authorized>
    </div>
)

export default Routes