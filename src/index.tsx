import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyles";
import colors from "./styles/theme";


// style
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <div className="wrapper">
          <App />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
