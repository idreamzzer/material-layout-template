import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MuiThemeProvider from "./MuiThemeProvider";
import Layout from "./Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Layout />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
