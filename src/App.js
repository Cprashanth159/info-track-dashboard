import './App.css';
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderComponent from "./components/HeaderComponent";
import SideNavigationComponent from "./components/SideNavigationComponent";
import MainComponent from './components/MainComponent'

const App = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HeaderComponent />
        <SideNavigationComponent />
        <MainComponent />
      </Box>
    </div>
  );
};

export default App;
