import React from "react";
import {
  MuiThemeProvider as MuiProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import purple from "@material-ui/core/colors/purple";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  mixins: {
    sidebar: {
      width: 240
    }
  },
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700]
    },
    secondary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    }
  }
});

const MuiThemeProvider = ({ children }) => (
  <MuiProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiProvider>
);

export default MuiThemeProvider;
