// @flow weak

import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Layout from '../layouts/Layout'

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;