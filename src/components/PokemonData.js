import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import { pokemonNameSearch } from '../queries/searchPokemonName'
import PokemonEvolutions from './PokemonEvolutions'

const Search = ({ data: { pokemon, error, loading } }) => {

  if (error || !pokemon) {
    return null
  }
  if (loading) return 'PokeLoading'

  return (
    <div className="d-flex justify-content-center">
      <div className="card">
        <div className="p-3">

          <img className="image-container" src={pokemon.image} />
        </div>
        <div className="card-body">
          <h4 className="card-title pb-5">Pokemon: {pokemon.number} - {pokemon.name}</h4>
          <div className="type-container">
            <h6 className="pr-3">Type:</h6>
            {pokemon.types.map(type => (
              <div className="type-item" key={type}>
                <span class="badge badge-info">{type}</span>
              </div>
            ))}
          </div>
          <div className="resistant-container">
            <h6 className="pr-3">Resistances:</h6>
            {pokemon.resistant.map(resistance => (
              <div className="resistant-item" key={resistance}>
                <span class="badge badge-success">{resistance}</span>
              </div>
            ))}
          </div>
          <div className="weak-container">
            <h6 className="pr-3">Weakness:</h6>
            {pokemon.weaknesses.map(weak => (
              <div className="weak-item" key={weak}>
                <span class="badge badge-danger">{weak}</span>
              </div>
            ))}
          </div>
          <div className="evolution-container">
            <PokemonEvolutions evolutions={pokemon.evolutions} />
          </div>
        </div>
      </div>
    </div>
  )
}

Search.propTypes = { pokemon: PropTypes.string }
Search.defaultProps = { pokemon: 'Pikachu' }

const options = {
  options: (props) => ({
    variables: {
      pokemon: props.pokemon
    },
  }),
}

export default graphql(pokemonNameSearch, { options })(Search);