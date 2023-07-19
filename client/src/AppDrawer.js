
import './App.css';
import React, { useCallback } from 'react';
import axios from 'axios'
import { useState, useEffect } from "react";
import AddTask from './AddTask';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TodayIcon from '@mui/icons-material/Today';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
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
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


//import { useHistory } from 'react-router-dom';
//import Grid from '@mui/material/Grid';

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginTop: 65,
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const drawerWidth = 240;
//{ drawerWidth, open, handleDrawerClose, theme, props }

export default function AppDrawer(props) {

  console.log("Rendering drawer")

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  //const history = useHistory();
  const [openProject, setOpenProject] = React.useState(true);
  const [projectCollectionFromDb, setProjectCollectionFromDb] = useState([]);
  const [projectID, setProjectID] = React.useState();

  const [isTextFieldOpen, setIsTextFieldOpen] = React.useState(false);
  const [textFieldValue, setTextFieldValue] = React.useState('');
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [moreItem, setMoreItem] = React.useState();



  const handleClick = () => {
    setOpenProject(!openProject);
  }

  const handleCreateProject = () => {
    setIsTextFieldOpen(true);
  }

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleTextFieldKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log("posting project name ", textFieldValue);
      axios.post('http://localhost:3002/createProject', {
        projectName: textFieldValue
      }).then(() => console.log("Finished pushing project name to database"))

      setIsTextFieldOpen(false);
      setTextFieldValue('');
      showprojectNameFromDb();
    }
  };

  const showprojectNameFromDb = () => {
    console.log("Fetching project data from database...");
    axios.get('http://localhost:3002/project').then((response) => {
      console.log("Finished fetching project data from database");
      setProjectCollectionFromDb(response.data)
      // console.log("get data: ", response.data);
    })
  }

  useEffect(() => {


    showprojectNameFromDb();

    //first

    // return () => {
    //   second
    // }
  }, [])



  const showTextField = () => {
    if (isTextFieldOpen) {
      console.log("showTextField");
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

  //Delete click 
  const handleClickDeleteOpen = () => {
    setDeleteOpen(true);
    console.log("delete open1",);
  };

  const handleDeleteYes = (id) => {
    console.log("Before deleting", props.data.id);
    console.log("delete yes1",);
  }

  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setMoreItem('');
    console.log("delete close1",);

  }

  const clickhandlermore = (projectID) => {
    //console.log("EXECUTING MORE ICON", projectCollectionFromDb);
    console.log("EXECUTING MORE ICON", projectID);

    setMoreItem(projectID)
    console.log("EXECUTING MORE ICON", moreItem);

    // console.log("EXECUTING MORE ICON");
    // if(projectCollectionFromDb.id === projectID)

    if (projectID === moreItem) {
      console.log("projectID === moreItem");
      return (
        <>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </>
        // <div>
        //   <Button variant="outlined" onClick={handleClickDeleteOpen} onClose={handleDeleteClose}><DeleteIcon />
        //     Delete
        //   </Button>
        //   <Dialog open={deleteOpen} onClose={handleDeleteClose}>
        //     <DialogContent>
        //       <DialogContentText>Are you sure you want to delete the task ?</DialogContentText>
        //     </DialogContent>
        //     <DialogActions>
        //       <Button onClick={handleDeleteYes}>Yes</Button>
        //       <Button onClick={handleDeleteClose}>No</Button>
        //     </DialogActions>
        //   </Dialog>
        // </div>
      )
    }
  }



  function deleteProject() {
    console.log("delete project");
    return (
      <>
        <DeleteIcon />
      </>
    )
  }
  //     return (



  // <div>
  //   <Button>more</Button>
  //           {/* <Button variant="outlined" onClick={handleClickDeleteOpen} onClose={handleDeleteClose}><DeleteIcon />
  //             Delete
  //           </Button>
  //           <Dialog open={deleteOpen} onClose={handleDeleteClose}>
  //             <DialogContent>
  //               <DialogContentText>Are you sure you want to delete the task ?</DialogContentText>
  //             </DialogContent>
  //             <DialogActions>
  //               <Button onClick={handleDeleteYes}>Yes</Button>
  //               <Button onClick={handleDeleteClose}>No</Button>
  //             </DialogActions>
  //           </Dialog> */}
  //         </div>




  // //       <div>
  // //         {/* <BorderColorIcon />
  // // <DeleteIcon /> */}


  // //         <Stack direction="column" spacing={2}>
  // //           <Button variant="outlined" startIcon={<DeleteIcon />} >
  // //             Delete
  // //           </Button>
  // //           <Button variant="outlined" endIcon={<DeleteIcon />}>
  // //             Delete
  // //           </Button>
  // //         </Stack>
  // //       </div>
  //     )
  //   }

  {/* <Button variant="outlined" onClick={handleClickDeleteOpen} onClose={handleDeleteClose}><DeleteIcon />
            Delete
          </Button>
          <Dialog open={deleteOpen} onClose={handleDeleteClose}>
            <DialogContent>
              <DialogContentText>Are you sure you want to delete the task ?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteYes}>Yes</Button>
              <Button onClick={handleDeleteClose}>No</Button>
            </DialogActions>
          </Dialog> */}



  // function ShowProjectNamesOnTop

  function GetListOfProjectNames() {
    //console.log("creating new projects ..............");
    return (
      <List>
        {projectCollectionFromDb.map((project, projectID) => (
          <ListItem key={projectID} disablePadding
          //onClick={() => clickProjectNames(project.projectID)}
          >

            <ListItemButton
              onClick={() =>
                props.OnActiveProjectChanged(project)}
            >
              <ListItemIcon><CircleIcon sx={{ height: '10px', width: '10px' }} /></ListItemIcon>
              <ListItemText primary={project.projectName} />
              <ListItemIcon>
                <MoreHorizIcon
                  onClick={() => clickhandlermore(project.projectID)}
                  sx={{
                    color: 'grey', "&:hover": {
                      bgcolor: '#F5F5F5',
                      color: 'black',
                      borderColor: 'black',
                      borderRadius: '5px'
                    },
                  }} /></ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }


  // const MemoizedChevronLeftIcon = React.memo(ChevronLeftIcon);
  // const MemoizedChevronRightIcon = React.memo(ChevronRightIcon);

  return (
    <Drawer
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: props.drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
    >
      <DrawerHeader>
        <IconButton open={props.open} onClick={props.handleDrawerClose}>
          {props.theme.direction === 'ltr' ?
            <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        {['Today', 'Upcoming'].map((textValue, index) => (
          <ListItem key={index} disablePadding>
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
          <ListItem key={index} disablePadding>
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
          <AddCircleIcon
            onClick={handleCreateProject}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }}
          />
          <IconButton onClick={handleClick}>
            {openProject ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Stack>

        {showTextField()}
        <Collapse in={openProject} timeout="auto" unmountOnExit>
          {GetListOfProjectNames()}
        </Collapse>

      </Stack>
    </Drawer>
  );
}





