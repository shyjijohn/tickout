import './App.css';
import * as React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import GridViewIcon from '@mui/icons-material/GridView';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
