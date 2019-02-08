import React, { Component } from 'react'
import logo from './resources/logo.png'

import Search from './Search'
import './App.css';


class App extends Component {

  state = {
    search: ""
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokedex</h2>
        </div>
        <div>
          <form>
            <label>
              Type a Pokemon:
              <input
                type="text"
                name="name"
                value={this.state.search}
                onChange={this.handleSearch}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Search pokemon={this.state.search} />
      </div>
    );
  }
}

export default App;

