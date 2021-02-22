import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./components/theme";
import React from "react";

function App() {
  return (
    <MuiThemeProvider theme={theme}>

    </MuiThemeProvider>
  );
}

export default App;
