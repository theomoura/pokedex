import React, { Component } from 'react'
import logo from './logo.svg'

import ChannelList from './ChannelList'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Chatline</h2>
        </div>
        <ChannelList />
      </div>
    );
  }
}

export default App;

