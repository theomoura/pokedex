import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'dotenv/config';
import App from './components/Pokedex';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql-pokemon.now.sh/' }),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  },
  fetchOptions: {
    mode: 'no-cors'
  },
  cache: new InMemoryCache()
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
