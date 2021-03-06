import React from "react";
//? Import ThemeProvider to be used on toggle theme color functionality
import { ThemeProvider } from "styled-components";
//? Import Global Style
import GlobalStyles from "./styles/GlobalStyles";
//? Import Routes
import Routes from "./routes";
import { useTheme } from "./hooks/theme";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
