import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "presentation/styles";
import { Router } from "./routes";
import { MakeAuthProvider } from "./factories/context";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MakeAuthProvider>
        <Router />
      </MakeAuthProvider>
    </ThemeProvider>
  );
};

export default App;
