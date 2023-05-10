
import './App.css';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TodayIcon from '@mui/icons-material/Today';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';


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
  const [projectNameCollection, setProjectNameCollection] = React.useState([]);


  const [isTextFieldOpen, setIsTextFieldOpen] = React.useState(false);
  const [textFieldValue, setTextFieldValue] = React.useState('');

  const handleClick = () => {
    //setOpenProject(!openProject);
    return (
      <Button></Button>
      // <Collapse in={openProject} timeout="auto" unmountOnExit>
      //   <List component="div" disablePadding>
      //     <ListItemButton sx={{ pl: 8 }}>
      //       <ListItemIcon>
      //         <CircleIcon fontSize="10px" />
      //       </ListItemIcon>
      //       <ListItemText primary={textFieldValue} />
      //     </ListItemButton>
      //   </List>
      // </Collapse>
    )
  };

  const handleCreateProject = () => {
    setIsTextFieldOpen(true);
  }

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleTextFieldKeyDown = (event) => {
    if (event.key === 'Enter') {
      setProjectNameCollection([...projectNameCollection , textFieldValue]);
      setIsTextFieldOpen(false);
      setTextFieldValue('');
    }
  };

  const showTextField = () => {
    if (isTextFieldOpen) {
      return (
        <TextField
          value={textFieldValue}
          onChange={handleTextFieldChange}
          label="Create new project"
          onKeyDown={handleTextFieldKeyDown}
        />
      );
    }
  };

  function CreatingNewProjects() {
    return (
      <List>
        {projectNameCollection.map((projectName, index) => (
          <ListItem key={projectName} disablePadding>
          <ListItemButton>
            <ListItemIcon><CircleIcon sx={{ }}/></ListItemIcon>
            <ListItemText primary={projectName} />
          </ListItemButton>
        </ListItem>
          ))}
      </List>
    );
  }


  const expandMoreFn = (event) => {
    console.log("222222", event.target.value)
  }

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
        {['Today', 'Upcoming'].map((textValue, index) => (
          <ListItem key={textValue} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <TodayIcon /> : <UpcomingIcon />}
              </ListItemIcon>
              <ListItemText primary={textValue} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

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


      <Stack direction="column">
        <Stack direction="row" spacing={3}>
          <AccountTreeIcon sx={{ marginLeft: '15px', color: 'grey' }} />
          <Typography >Projects</Typography>
          <AddCircleIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }}
            onClick={handleCreateProject} />
        </Stack>
        {showTextField()}
       {CreatingNewProjects()}
      </Stack>


      
          {/* {openProject ?
                <ExpandMore
                  onClick={expandMoreFn}
                  value={textFieldValue}
                ></ExpandMore>
                : <ExpandLess
                  onClick={expandMoreFn}
                  value={textFieldValue}

                ></ExpandLess>
              } */}

    </Drawer>
  );
}

