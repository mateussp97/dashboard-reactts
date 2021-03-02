import React from "react";
//? Import ThemeProvider to be used on toggle theme color functionality
import { ThemeProvider } from "styled-components";
//? Import Global Style
import GlobalStyles from "./styles/GlobalStyles";
//? Import Theme Color
import dark from "./styles/themes/dark";
//? Import Routes
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
