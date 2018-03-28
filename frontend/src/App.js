import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Master from './components/Master'
import Routes from './Routes'
import Auth from './auth/Auth'

import loginProvider from './auth/loginProvider'

const login = new loginProvider()

class App extends Component {

  render() {
    return (
      <Auth provider={login}>
        <BrowserRouter>
          <Master>
            <Routes />
          </Master>
        </BrowserRouter>
      </Auth>
    )
  }
}

export default App;
