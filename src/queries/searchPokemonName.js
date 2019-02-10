import gql from "graphql-tag";

export const pokemonNameSearch = gql`
  query getPokemon($pokemon: String!) {
    pokemon(name: $pokemon) {
      id
      number
      types
      image
      resistant
      weaknesses
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
        image
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
  }`