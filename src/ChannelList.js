import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const QUERY = gql`
{
  pokemon(name: "Pikachu") {
    id
    number
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

const ChannelList = ({ episode }) => (
  <Query query={QUERY} variables={{ episode }}>
    {({ data, error, loading }) => {
      if (error) return '💩 Deu merda!';
      if (loading) return 'PokeLoading';

      return (
        <React.Fragment>
          <h1>Pokemon: {data.pokemon.name}</h1>
          <h2>Attacks:</h2>
          <ul>
            {data.pokemon.attacks.special.map(attack => (
              <li key={attack.name}>{attack.name}</li>
            ))}
          </ul>
        </React.Fragment>
      );
    }}
  </Query>
);

ChannelList.propTypes = { episode: PropTypes.string };
ChannelList.defaultProps = { episode: 'NEWHOPE' };

export default ChannelList
