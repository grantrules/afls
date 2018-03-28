import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Master from './components/Master'
import Routes from './Routes'
import Auth from './auth/Auth'

class App extends Component {

  render() {
    return (
      <Auth>
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
