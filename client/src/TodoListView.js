import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import { Stack, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from 'axios'
import Divider from '@mui/material/Divider';
import AddTask from './AddTask';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteIcon from '@mui/icons-material/Delete';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useEffect } from 'react';



export default function GetTodoListView() {



  //database get items

  //console.log("GetTodoListView start");
  const [checked, setChecked] = React.useState([0]);
  const [mouseHoveringItemName, setMouseHoveringItemName] = React.useState();
  const [selectedEditButtonItemId, setSelectedEditButtonItemId] = React.useState();
  const [dateItem, setDateItem] = React.useState();
  const [commentItem, setCommentItem] = React.useState();
  const [moreItem, setMoreItem] = React.useState();
  const [dataFromDatabase, setDataFromDatabase] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [commentOpen, setCommentOpen] = React.useState(true);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [openListView, setOpenListView] = React.useState(true);
  const [listItemClick, setListItemClick] = React.useState();
  const [radioClick, setRadioClick] = React.useState(false);



  //console.log("editItem value", editItem);
  //list view
  const handleToggle = (nameAsValue) => () => {

    console.log('handleToggle value', nameAsValue);
    const currentIndex = checked.indexOf(nameAsValue);
    const newChecked = [...checked]; //copy to new array

    console.log('newChecked', newChecked);

    if (currentIndex === -1) {
      newChecked.push(nameAsValue);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  //useEffect(call only once)
  function CallOnce() {
    useEffect(() => {
      showDataFromDatabase();
     }, [] );
  }

  //CallOnce();

  //from database
  const showDataFromDatabase = () => {
    //console.log("Calling showDataFromDatabase 11111111")
    axios.get('http://localhost:3002/task').then((response) => {
      setDataFromDatabase(response.data)
    })
  }
  showDataFromDatabase();

 
  const handleUpdate = () => {

  }

  const theme = useTheme();

  const isMobileSchedule = useMediaQuery(theme.breakpoints.down('md'));

  function schedule() {
    return (
      (isMobileSchedule ?
        (<Stack
          marginTop={-3.5}
          name="label2"
          direction="row"
          paddingLeft={25}
          position="relative"
          paddingBottom={0}>
          <BorderColorIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              onClick: 'MyComponent()',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <EventIcon sx={{


            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <ChatBubbleOutlineIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <MoreHorizIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />
        </Stack >)
        :
        (<Stack
          marginTop={-3.5}
          name="label2"
          direction="row"
          paddingLeft={75}
          position="relative"
          paddingBottom={0}>
          <BorderColorIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <EventIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <ChatBubbleOutlineIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <MoreHorizIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />
        </Stack >)
      ))
  }


  function isListItemHover(data) {

    //Edit click
    const handleEditHover = () => {
      console.log("edit is clicked", data.id);
      setSelectedEditButtonItemId(data.id);
    };

    //Date click   
    const handleDateHover = () => {
      console.log("date is clicked", data.id);
      setDateItem(data.id);
    };

    if (data.id === dateItem) {
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {getDatePicker()}
        </LocalizationProvider>
      );
    }

    //Comment click   
    const handleCommentClose = () => {
      setCommentOpen(false);
      setCommentItem('');
    }

    const handlecommenthover = () => {
      console.log("comment is clicked", data.id);
      setCommentItem(data.id);
      setCommentOpen(true);
    };

    if (data.id === commentItem) {
      return (
        <div>
          <Dialog open={commentOpen} onClose={handleCommentClose}>
            <DialogTitle>Title</DialogTitle>
            <DialogContent>
              <DialogContentText >Task Name : {data.dialogTaskName}</DialogContentText>
              <DialogContentText> Task Description : {data.dialogTaskDescription}</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Comments"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCommentClose}>Cancel</Button>
              <Button onClick={handleCommentClose}>Save</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }


    //Delete click 
    const handleClickDeleteOpen = () => {
      setDeleteOpen(true);
    };

    const handleDeleteClose = () => {
      setDeleteOpen(false);
      setMoreItem('');
    }

    const handlemorehover = (e) => {
      console.log("date is clicked", data.id);
      setMoreItem(data.id);
    };


    if (data.id === moreItem) {
      return (
        <div>
          <Button variant="outlined" onClick={handleClickDeleteOpen} onClose={handleDeleteClose}><DeleteIcon />
            Delete
          </Button>
          <Dialog open={deleteOpen} onClose={handleDeleteClose}>
            <DialogContent>
              <DialogContentText>Are you sure you want to delete the task ?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteClose}>Yes</Button>
              <Button onClick={handleDeleteClose}>No</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }


    return (
      mouseHoveringItemName === data.dialogTaskName ?
        <Stack
          name="label2"
          direction="row"
          position="relative"
          display="inline-flex"
          justifyContent="flex-end"
          paddingBottom={7}>
          <BorderColorIcon
            onClick={handleEditHover}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }} >
          </BorderColorIcon>
          &nbsp;&nbsp;
          <EventIcon
            onClick={handleDateHover}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }} >
          </EventIcon>
          &nbsp;&nbsp;
          <ChatBubbleOutlineIcon
            onClick={handlecommenthover}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }} />&nbsp;&nbsp;
          <MoreHorizIcon
            onClick={handlemorehover}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }} />
        </Stack >

        : <Stack
          name="label2"
          display="none">
          <BorderColorIcon></BorderColorIcon>
        </Stack>
    )
  }

  const dateOnClose = () => {
    // setDeleteOpen(false);
    console.log("dateOnClose", selectedDate)
    //setDateItem({ selectedDate });
    setDateItem('');
  }

  function getDatePicker() {
    //console.log("getting date");
    return (
      isMobileSchedule ? <StaticDatePicker
        value={selectedDate}
        onClose={dateOnClose}
        onChange={handleDateChange}
        sx={{
          borderColor: '#B2BEB5',
          ':hover':
          {
            bgcolor: '#F5F5F5',
            color: 'black',
            borderColor: '#B2BEB5'
          },
        }}
        renderInput={(params) => <TextField
          sx={{
              "& .MuiInputBase-input": {
                  height: "fit-content",  // Set your height here.
                  backgroundColor: "transparent",
                  color: "grey",
                  borderRadius: "10px",
                  padding: "3.5px",
                  fontSize: "15px",
                  textAlign: "center",
                  borderColor: "#B2BEB5",
                  ':hover':
                  {
                      bgcolor: '#F5F5F5',
                      color: 'black',
                      borderColor: '#B2BEB5'
                  },
              }
          }}
          {...params}
      />}
      />
        :
        <StaticDatePicker
          value={selectedDate}
          onClose={dateOnClose}
          onChange={handleDateChange}
          sx={{
            borderColor: '#B2BEB5',
            //height: '200px',
            //width: '200px',
            ':hover':
            {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: '#B2BEB5'
            },
          }}
        >
          renderInput={(params) => <TextField
                    sx={{
                        "& .MuiInputBase-input": {
                            height: "fit-content",  // Set your height here.
                            backgroundColor: "transparent",
                            color: "grey",
                            borderRadius: "10px",
                            padding: "3.5px",
                            fontSize: "15px",
                            textAlign: "center",
                            borderColor: "#B2BEB5",
                            ':hover':
                            {
                                bgcolor: '#F5F5F5',
                                color: 'black',
                                borderColor: '#B2BEB5'
                            },
                        }
                    }}
                    {...params}
                />}
        </StaticDatePicker>
    );
  }


  const handleDateChange = (event) => {
    //console.log("handlePrioritySelection event: ", event);
    setSelectedDate(event);
    console.log("setSelectedDate event: ", event);
    selectedDate(event);
  }

  //console.log("going to call html");


  //getTodolistview return fn
  return (
    <div >
      <div>
      {/* {showDataFromDatabase()} */}
        <Typography
          paddingLeft={0.5}
          fontWeight="bold"
          fontSize="20px"
        >
          dog
        </Typography>
        <div>{schedule()}</div>
      </div>


      <List sx={{
        boxSizing: "border-box",
        width: '200%', maxWidth: 800,
        bgcolor: 'background.paper'
      }}>
        {dataFromDatabase.map((data) => {

          if (data === undefined)
            return null;
          if (data.length === 0)
            return null;


          //console.log("Edit Item selected", selectedEditButtonItemId);
          //console.log("Data", data);
          //console.log("Data id", data.id);

          const closeSaveTask = () => {
            setSelectedEditButtonItemId('');
          }
          if (data.id === selectedEditButtonItemId) {
            return (<AddTask isSaveTask={true}
              key={data.id}
              data={data}
              endSave={closeSaveTask}
            ></AddTask>);
          }

          

          const radioClickHandler = () => {
            checked = (checked.indexOf(data.dialogTaskName) !== -1)
            setRadioClick(checked)
            if (checked(data.id) === checked) {
              setRadioClick(false)
            }
          }

          

          //List view click  

          const handleListItemClick = () => {

            //console.log("handleListItemClick")
             setListItemClick(data.id)
          }

          const handleClickListViewOpen = () => {
            setOpenListView(true);
          };

          const handleListViewClose = () => {
            setOpenListView(false);
          }

          if (data.id === listItemClick) {
            return (
              <div>
                <Dialog fullScreen open={openListView} onClose={handleListViewClose}>
                  <DialogTitle>Title</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Task Name</DialogContentText>
                    <DialogContentText> Task Description</DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Comments"
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleListViewClose}>Cancel</Button>
                    <Button onClick={handleListViewClose}>Save</Button>
                  </DialogActions>
                </Dialog>
              </div>
            )
          }

          // console.log('value casted to date', new Date(data.date).toDateString());
          //console.log('value not casted', value.date.toDateString());
          // console.log(value.date.toString());
          const labelId = `checkbox-list-label-${data.dialogTaskName}`;

          return (
            <ListItem
              sx={{
                boxSizing: "border-box",
                justifyContent: "center ",
                alignItems: "left "
              }}
              onMouseOver={() => {
                // console.log("mouse hover on item!!!!!!!", data.dialogTaskName)
                setMouseHoveringItemName(data.dialogTaskName);

              }}

              onMouseOut={() => {
                setMouseHoveringItemName(null);
                //   console.log("mouse out of item*********", data.dialogTaskName)    
              }}
              key={data.dialogTaskName}
              disablePadding
             //onClick={handleListItemClick}
            >
              <ListItemButton role={undefined} onClick={handleToggle(data.dialogTaskName)} dense
                sx={{
                  boxSizing: "border-box",
                  marginLeft: "-15px",
                }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "left ",
                    alignItems: "left "
                  }} >
                  <Radio
                    edge="start"
                    //checked={checked.indexOf(data.dialogTaskName) !== -1}
                    tabIndex={-1}
                    disableRipple
                    onClick={radioClickHandler}
                    inputProps={{ 'aria-labelledby': labelId }}
                    sx={{
                      justifyContent: "left ",
                      alignItems: "left ",
                      paddingBottom: "60px",
                      ':hover':
                      {
                        bgcolor: '#F5F5F5',
                        color: 'black',
                        borderColor: '#B2BEB5'
                      },
                    }}
                  >
                  </Radio>

                </ListItemIcon>
                <Stack name="label1" direction="column"
                  sx={{
                    display: "block",
                    boxSizing: "border-box",
                    justifyContent: "left ",
                    alignItems: "left "
                  }} >
                  <ListItemText 
                    sx={{ boxSizing: "border-box", display: "flex", flexWrap: "inherit" }}
                    id={labelId}
                    primary={data.dialogTaskName} />
                  <ListItemText
                    sx={{ boxSizing: "border-box", display: "flex", flexWrap: "inherit" }}
                    id={labelId}
                    primary={data.dialogTaskDescription} />
                  <Stack direction="row">
                    <EventIcon
                      sx={{
                        color: "#D0312D"
                      }}
                    />&nbsp;
                    <ListItemText
                      id={labelId}
                      value={selectedDate} onChange={handleDateChange} 
                      onClose={dateOnClose}
                      primary={new Date(data.selectedDate).toDateString()}
                      sx={{
                        color: "#D0312D"
                      }} />
                  </Stack>
                  <Divider sx={{ width: '550%' }} />
                </Stack>
              </ListItemButton>
              <Stack sx={{
                boxSizing: "border-box",
              }}
              >{isListItemHover(data)}</Stack >
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}


