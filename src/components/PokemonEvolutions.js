import React from 'react'

const PokemonEvolutions = ({ evolutions }) => {

  if (!evolutions) {
    return null
  }

  return (
    <div className="evolution-container">
      <h5>Evolutions</h5>
      <div>
        {evolutions.map(evolution => (
          <div className="evolution-item" key={evolution.name}>
            <ul className="list-group">
              <li className="list-group-item d-flex align-items-center">
                <img className="evolution-image" alt="evolution" src={evolution.image} />
                <span className="pl-3">{evolution.name}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonEvolutions