import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/actions/sideNavAction";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideNavigationComponent() {
  const theme = useTheme();
  const toggleSideNav = useSelector((state) => state.toggle.toggleSideNav);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(toggle());
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={toggleSideNav}
    >
      <DrawerHeader>
        <div>
        <Typography variant="h5" style={{ "margin-right": 40 }} component="div" color="blue">
          <b><span style={{ color: 'red' }}>Info</span><span style={{ color: '#5848b7' }}>Track</span></b>
        </Typography>
        </div>
        
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem key={"Dashboard"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon style={{ fill: "orange", width: 30, height: 30 }}/>
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Track On Map"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RoomRoundedIcon style={{ fill: "red", width: 30, height: 30 }}/>
            </ListItemIcon>
            <ListItemText primary={"Track On Map"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Reports"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InsightsRoundedIcon style={{ fill: "violet", width: 30, height: 30 }}/>
            </ListItemIcon>
            <ListItemText primary={"Reports"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
