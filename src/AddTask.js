
import * as React from 'react';

import { createTheme } from "@mui/material/styles";


import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



// import FormLabel from '@mui/material/FormLabel';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';



import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';

import { Divider, Stack } from '@mui/material';
import { Task } from './Task';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import OutlinedInput from '@mui/material/OutlinedInput';
import { Directions, Height } from '@mui/icons-material';

import { styled,useTheme } from '@mui/material/styles';





export default function AddTask({ appendTaskFn }) {




    //class - object
    //    const [item, setItem] = React.useState({});
    //class - object array
    //    const [itemCol, setItemCol] = React.useState([{}]);
    const theme = useTheme();
    const [dialogTaskName, setDialogTaskName] = React.useState('');
    const [dialogTaskDescription, setDialogTaskDescription] = React.useState('');
    const [dateInput, setDateInput] = React.useState();
    //const [value, setValue] = React.useState('2014-08-18T21:11:54');

    const [priority, setPriority] = React.useState('');
    // const [Reminder, setReminder] = React.useState('');
    // const [Extra, setExtra] = React.useState('');
    // const [HomeInspiration, setHomeInspiration] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };


    const handleCancel = () => {
        setDialogTaskName("")
        setDialogTaskDescription("")
    };


    const handleAdd = () => {
        // if (dialogTaskName == dialogTaskName && dialogTaskDescription == dialogTaskDescription)
        //   return false; 

        if (dialogTaskName == '' && dialogTaskDescription == '')
            return;


        let t = new Task(dialogTaskName, dialogTaskDescription, dateInput, priority)

        appendTaskFn(t);

        //      settodoCol([...todoCol, t])

        setDialogTaskName("")
        setDialogTaskDescription("")
        //   console.log("{a}" + " " + "{b}")
    };

    const handleDialogTaskName = (e) => {
        setDialogTaskName(e.target.value);
    };

    const handleDialogTaskDescription = (e) => {
        setDialogTaskDescription(e.target.value);
    };

    const handleDateTimePickerChange = (date) => {
        setDateInput(date);
    };


    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };
    const styleForM = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 0.25,
        border: 1,
        maxWidth: 800,
        // display:"flex",
        // width: '35rem',
        // height: '11rem',
        paddingLeft: "4px", paddingTop: "4px",
        paddingRight: "4px", paddingBottom: "4px"

    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        //maxHeight: 30,
        color: theme.palette.text.secondary,
        paddingLeft: "0px", paddingTop: "0px",
        paddingRight: "0px", paddingBottom: "0px"

    }));

    // const useStyles = makeStyles(theme => ({
    //     button: {
    //         margin: theme.spacing(1),
    //         [theme.breakpoints.down("sm")]: {
    //             minWidth: 32,
    //             paddingLeft: 8,
    //             paddingRight: 8,

    //         },
    //         buttonText: {
    //             [theme.breakpoints.down("sm")]: {
    //                 display: "none"
    //             }
    //         }
    //     }
    // }));

    // const classes = useStyles();

    return (
        <Box sx={{ ...styleForM, borderRadius: '16px', minwidth: 120 }} margin="0"
            padding="0">

            <FormControl sx={{ m: 1, minWidth: 420, minHeight: 100 }}  >
                <Grid container spacing={0.5} columns={12}  >
                    <Grid item xs={12}>

                        <TextField
                        // paddingLeft= "0px" paddingTop= "0px"
                        // paddingRight= "0px" paddingBottom= "0px"
                
                            value={dialogTaskName}
                            onChange={handleDialogTaskName}
                            id="name"
                            label="Task name"
                            type="email"
                            fullWidth
                            variant="standard"
                            inputProps={{
                                style: {
                                  height: "1px"
                                }
                             }}
                            InputProps={{ disableUnderline: true }}
                        />

                    </Grid>

                    <Grid item xs={12} padding={0}>

                        <TextField
                            value={dialogTaskDescription}
                            onChange={handleDialogTaskDescription}
                            autoFocus
                            id="name"
                            label="Description"
                            type="email"
                            margin="none"
                            fullWidth
                            variant="standard"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                        />

                    </Grid>

                    <Grid item xs={4} md={1.7}>


                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                // style={{
                                //     display: 'flex', alignItems: 'center',
                                //     minheught: "50px",
                                //     color: 'grey', borderColor: '#B2BEB5', ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' },

                                // }}
                                renderInput={(params) => (
                                    <TextField
                                      sx={{
                                        "& .MuiInputBase-input": {
                                          height: "0.1px" // Set your height here.
                                        }
                                      }}
                                      {...params}
                                    />
                                  )}
                                padding={0}
                                margin="none"
                                inputFormat="MM/DD/YYYY"
                                variant="outlined"
                                size="small"
                                label="Due date"
                                value={dateInput}
                                onChange={handleDateTimePickerChange}
                                // renderInput={(params) => <TextField {...params} />}
                                sx={{ color: 'grey', borderColor: '#B2BEB5', ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' }, }}

                            />
                        </LocalizationProvider>
                    </Grid>




                    <Grid item xs={4} md={1.73} aria-hidden="false"  >
                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                        <div>
                            <Button sentenceCase
                                size="small"
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                //onClick={handleClick}

                                variant='outlined'

                                sx={{ color: 'grey', borderColor: '#B2BEB5', ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' }, }}
                            ><EmojiFlagsIcon />
                                PRIORITY
                            </Button>
                            <Menu
                                id="long-menu">
                                {/* {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClosedot}>
                                        {option}
                                    </MenuItem>
                                ))} */}
                            </Menu>
                        </div>
                    </Grid>
                    {/* <Grid item xs={4} md={0}>
                        </Grid> */}
                    <Grid item xs={4.4} md={2.4}>

                        {/* Reminder */}
                        <div>
                            <Button sentenceCase
                                size="small"
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                               // onClick={handleClick}

                                variant='outlined'

                                sx={{ color: 'grey', borderColor: '#B2BEB5', ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' }, }}
                            ><AccessAlarmIcon />
                                Reminder  pro
                            </Button>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                // anchorEl={anchorEl}
                                // open={opendot}
                                // onClose={handleClosedot}
                                // PaperProps={{
                                //     style: {
                                //         maxHeight: ITEM_HEIGHT * 4.5,
                                //         width: '20ch',
                                //     },
                                // }}
                            >
                                {/* {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClosedot}>
                                        {option}
                                    </MenuItem>
                                ))} */}
                            </Menu>

                        </div>

                    </Grid>

                    <Grid item xs={3} md={0.5}>

                        {/* ... */}
                        {/* <InputLabel id="demo-select-small">...</InputLabel> */}
                        <div>
                            <Button sentenceCase
                                size="small"
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                               // onClick={handleClick}

                                variant='outlined'

                                sx={{ color: 'grey', borderColor: '#B2BEB5', ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' }, }}
                            ><MoreHorizIcon />
                            </Button>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                // anchorEl={anchorEl}
                                // open={opendot}
                                // onClose={handleClosedot}
                                // PaperProps={{
                                //     style: {
                                //         maxHeight: ITEM_HEIGHT * 4.5,
                                //         width: '20ch',
                                //     },
                                // }}
                            >
                                {/* {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClosedot}>
                                        {option}
                                    </MenuItem>
                                ))} */}
                            </Menu>

                        </div>

                    </Grid>

                    <Grid item xs={4} md={6}>
                    </Grid>
                    <Divider style={{width:'100%'}} />

                    <Grid item xs={5.5} md={7.5}>

                        {/* Home / Inspiration */}
                        <Select
                            // sx={{
                            //     m: 0, 
                            //     color: 'grey', borderColor: '#B2BEB5', ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' },

                            // }}
                            value={priority}
                            label="Inbox"
                            margin="none"
                            padding="0"
                            variant="outlined"
                            size="small"
                            onChange={handlePriorityChange}

                        >
                            {/* <Tooltip title="Home/Inspiration" arrow>
                                <Button>Arrow</Button>
                            </Tooltip> */}
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Priority 1</MenuItem>
                            <MenuItem value={20}>Priority 2</MenuItem>
                            <MenuItem value={30}>Priority 3</MenuItem>
                            <MenuItem value={10}>Priority 4</MenuItem>
                            <MenuItem value={20}>Priority 5</MenuItem>
                            <MenuItem value={30}>Priority 6</MenuItem>
                        </Select>

                    </Grid>

                    {/* <Stack direction="row-reverse" spacing={1}
                        paddingTop={5}> */}

                    <Grid item xs={2.5} md={1.7}>

                        <Button
                            sx={{
                                bgcolor:'#CED2C2',
                                color: 'black',
                                borderColor: '#CED2C2',
                                ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' }, 
                                margin: theme.spacing(1),
                                [theme.breakpoints.down("sm")]: {
                                    minWidth: 32,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    "& .MuiButton-startIcon": {
                                        margin: 0
                                    }
                                }
                            }}

                            onClick={handleCancel}
                            startIcon={<ClearIcon />}

                            margin="none"
                            padding="0"
                            variant="contained"
                            size="small"
                        > <span style={{
                            [theme.breakpoints.down("sm")]: {
                                display: "none"
                              }
                        }} >Cancel</span>
                        </Button>

                    </Grid>

                    <Grid item xs={4} md={2.5}>

                        <Button
                            style={{
                                margin: theme.spacing(1),
                                [theme.breakpoints.down("sm")]: {
                                    minWidth: 32,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    "& .MuiButton-startIcon": {
                                        margin: 0
                                    }
                                }
                            }}
                            sx={{
                                bgcolor: 'red'
                            }}
                            onClick={handleAdd}
                            endIcon={<DoneIcon />}
                            margin="none"
                            padding="0"
                            variant="contained"
                            size="small"
                        >Add Task</Button>

                    </Grid>



                    {/* </Stack> */}

                </Grid>
            </FormControl>

            {/* <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                    
                </FormControl> */}

            {/* 
                <div>
       <InputLabel id="demo-select-small" onClick={handleClickOpen}>Reminder</InputLabel>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
 */}


            {/* 
                <FormControl sx={{ m: 1, minWidth: 100, fontSize: "2" }} size="small">
                    
                </FormControl>


                <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
                    
                </FormControl>


                <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                   
                </FormControl>
 */}


            {/* <Button variant="outlined" >Reminders</Button>
                <Button variant="outlined">...</Button> */}



        </Box>

    );
}
