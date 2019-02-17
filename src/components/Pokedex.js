import React, { useState, useEffect } from 'react'

import logo from '../resources/logo.png'
import Search from './PokemonData'
import '../global.css'

const App = () => {

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="app">
      <div className="app-header d-flex justify-content-center flex-column">
        <div>
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Pokedex</h2>
        </div>
      </div>
      <div className="container">
        <div className="form-group row">
          <label htmlFor="searchbox" className="col-sm-3 col-form-label">
            Type a Pokemon:
            </label>
          <div className="col-sm-9">
            <input
              id="searchbox"
              type="text"
              name="name"
              placeholder="Insert a pokemon name"
              className="form-control"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <Search pokemon={search} />
    </div>
  )
}

export default App;