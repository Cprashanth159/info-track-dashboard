import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { increment, decrement } from "../redux/actions/dashboardAction";
import HeaderComponent from "./HeaderComponent";
import SideNavigationComponent from "./SideNavigationComponent";
import MainComponent from './MainComponent'

const DashboardComponent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

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

export default DashboardComponent;
