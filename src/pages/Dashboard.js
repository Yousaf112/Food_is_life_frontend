import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Dashboard from "../containers/Dashboard";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import { ThemeContext } from "../context/themeContext";

const Dashboard = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Dashboard />
      </>
    </ThemeProvider>
  );
};

export default Dashboard;
