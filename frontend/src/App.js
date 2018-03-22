import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Master from './components/Master'
import Routes from './Routes'



import './App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Master>
          <Routes />
        </Master>
      </BrowserRouter>
    )
  }
}

export default App;
