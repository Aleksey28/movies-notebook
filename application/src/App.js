import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './components/theme';
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Tabs />
    </MuiThemeProvider>
  );
}

export default App;
