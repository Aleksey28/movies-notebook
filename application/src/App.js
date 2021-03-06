import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import theme from './components/theme';
import Tabs from './components/Tabs/Tabs';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Tabs />
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
