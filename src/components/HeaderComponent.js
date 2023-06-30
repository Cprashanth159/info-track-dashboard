import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar'; 
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/actions/sideNavAction";
import Grid from "@mui/material/Grid";
import Tooltip from '@mui/material/Tooltip';
import img from '../assets/avatar3.png'


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function HeaderComponent() {

  const toggleSideNav = useSelector((state) => state.toggle.toggleSideNav);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(toggle());
  };


  return (
      <AppBar position="fixed" open={toggleSideNav}>
        <Toolbar sx={{ backgroundColor: 'white' }}>
          <IconButton
           
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(toggleSideNav && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={1}>
        <Grid item xs={12}>
        <Tooltip title="User">
              <IconButton  sx={{float:'right'}}>
                <Avatar alt="Remy Sharp" src={img} />
              </IconButton>
            </Tooltip>
        </Grid>
      </Grid>
        </Toolbar>
        
      </AppBar>
  );
}