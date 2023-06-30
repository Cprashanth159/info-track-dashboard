import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import TableComponent from "./table/TableComponent";
import SelectedTableComponent from "./SelectedTableComponent";
import BarChartComponent from "./BarChartComponent"
import MapComponent from "./MapComponent"
import WidgetsComponent from "./widgets/WidgetsComponent"
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const Main = styled("main")(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
export default function MainComponent() {
  const toggleSideNav = useSelector((state) => state.toggle.toggleSideNav);

  return (
    <Main open={toggleSideNav}>
      <DrawerHeader />
      <WidgetsComponent />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <MapComponent />
        </Grid>
      </Grid>
        <br />
        <Typography gutterBottom variant="h6" sx={{fontWeight: 'bold'}} component="div">
        Selected Records
      </Typography> 
      <Grid container spacing={1}>

        <Grid item xs={6}>
          <SelectedTableComponent />
        </Grid>
        <Grid item xs={6}>
            <BarChartComponent />
        </Grid>
      </Grid>
      <br /><br />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TableComponent />
        </Grid>
      </Grid>
    </Main>
  );
}
