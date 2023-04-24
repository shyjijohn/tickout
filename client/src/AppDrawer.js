
import './App.css';

import * as React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import TodayIcon from '@mui/icons-material/Today';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import DashboardIcon from '@mui/icons-material/Dashboard';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';

import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import InputBase from '@mui/material/InputBase';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";


export default function AppDrawer({ drawerWidth, open, handleDrawerClose, theme }) {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const [openProject, setOpenProject] = React.useState(true);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClick = () => {
    setOpenProject(!openProject);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleToCloseDialog = () => {
    setOpenDialog(false);
  };


  return (

    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        {['Today', 'Upcoming'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <TodayIcon /> : <UpcomingIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      <List>
        {['Calendar View', 'Board View'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <CalendarMonthIcon /> : <DashboardIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Projects'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon><AccountTreeIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleIcon onClick={handleOpenDialog}>
                <Dialog open={openDialog} onClose={handleToCloseDialog}>
        <DialogTitle>How are you?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I am Good, Hope the same for you!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToCloseDialog} 
                  color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
                </AddCircleIcon>
              </ListItemIcon>
              {openProject ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
        ))}

        <Collapse in={openProject} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 8 }}>
              <ListItemIcon>
                <CircleIcon fontSize="10px" />
              </ListItemIcon>
              <ListItemText primary="Project 1" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

