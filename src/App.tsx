import React from "react";
//? Import ThemeProvider to be used on toggle theme color functionality
import { ThemeProvider } from "styled-components";
//? Import Global Style
import GlobalStyles from "./styles/GlobalStyles";
//? Import Components
import Layout from "./components/Layout/index";
//? Import Theme Color
import dark from "./styles/themes/dark";
//? Import pages
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
