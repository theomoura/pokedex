import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const QUERY = gql`
  query getPokemon($pokemon: String!) {
    pokemon(name: $pokemon) {
      id
      number
      types
      name
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`

const Search = ({ pokemon }) => (
  <Query query={QUERY} variables={{ pokemon }}>
    {({ data, error, loading }) => {
      if (error) return error.message
      if (loading) return 'PokeLoading'
      if (!data.pokemon) return null

      return (
        <React.Fragment>
          <h1>Pokemon: {data.pokemon.name}</h1>
          <h2>Tipo:</h2>
          <ul>
            {data.pokemon.types.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </React.Fragment>
      );
    }}
  </Query>
);

Search.propTypes = { pokemon: PropTypes.string }
Search.defaultProps = { pokemon: 'Pikachu' }

export default Search;
