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
import CommentIcon from '@mui/icons-material/Comment';
import GridViewIcon from '@mui/icons-material/GridView';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
import GetTodoListView from './TodoListView';
import AddTask from './AddTask';
import AppBar from './AppBar';
import AppDrawer from './AppDrawer';



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop:65,
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const drawerWidth = 240;

function App() {

  const [todoCol, settodoCol] = React.useState([[]]);

  console.log(todoCol);
  const appendTask = (t) => {
    settodoCol([...todoCol, t])
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  const actions = [
    { icon: <CommentIcon />, name: 'Comment' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <GridViewIcon />, name: 'View' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar drawerWidth={drawerWidth} open={open} handleDrawerOpen={handleDrawerOpen} />
      <AppDrawer drawerWidth={drawerWidth} open={open} handleDrawerClose={handleDrawerClose} theme={theme} />

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 100, right: 100 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>

      <Main open={open}>
        <Grid
          container>
          <Grid
            item
            xs={12}>
            <GetTodoListView items={todoCol}>  </GetTodoListView>
            <AddTask appendTaskFn={appendTask}></AddTask>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}

export default App;
