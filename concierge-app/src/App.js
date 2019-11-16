import React, { Component } from 'react';

import User from './Component/User'
import PickUp from './Component/PickUp';
import Driver from './Component/Driver';
import Vibe from './Component/Vibe'


import './App.scss';
import './Assets/scss/main.scss'
import logo from './Assets/image/Concierge-app.png'


class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <User />
        </div>
        <div className="col-sm-12">
          <PickUp />
        </div>
        <div className="col-sm-12">
          <Driver />
        </div>
        <div className="col-sm-12">
          <Vibe />
        </div>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    )

  }

}

export default App;
