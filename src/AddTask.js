
import * as React from 'react';

import { createTheme } from "@mui/material/styles";


import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';
import EventNoteIcon from '@mui/icons-material/EventNote';


import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib

import { useRef } from "react";
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

import { styled, useTheme } from '@mui/material/styles';





export default function AddTask({ appendTaskFn }) {




    //class - object
    //    const [item, setItem] = React.useState({});
    //class - object array
    //    const [itemCol, setItemCol] = React.useState([{}]);

    const inputRef = useRef(null);
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
    const [closeDate, setCloseDate] = useState(false);





    const [isForcePickerOpen, setIsOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());




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


    const handleCloseDate = () => setCloseDate(true);

    const styleForM = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 0.25,
        fontSize: '10px',
        border: 1,
        maxWidth: 800,
        maxheight: 150,
        // display:"flex",
        // width: '35rem',
        // height: '11rem',
        paddingLeft: "0px", paddingTop: "5px",
        paddingRight: "0px", paddingBottom: "0px"

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


    const CustomButton = styled(Button)(({ theme }) => ({
        size: "small",
        textTransform: 'none',
        padding: '2px',
        textAlign: 'center',
        variant: 'outlined',
        fontSize: '12px',
        color: 'grey',
        borderColor: '#B2BEB5', ':hover':
        {
            bgcolor: '#F5F5F5',
            color: 'black',
            borderColor: 'black'
        },

    }));

    const CustomButtonred = styled(Button)(({ theme }) => ({
        size: "small",
        textTransform: 'none',
        padding: '0px',
        textAlign: 'center',
        variant: 'contained',
        fontSize: '10px',
        color: 'red',
        "&:hover": {
            backgroundColor: "#ffcbd1",
            color: 'red',
            padding: '0px',
            borderRadius: '4px'
        },

    }));

    const CustomButtonclose = styled(Button)(({ theme }) => ({
        size: "small",
        textTransform: 'none',
        padding: '0px',
        minWidth: '39px',
        textAlign: 'center',
        variant: 'contained',
        fontSize: '10px',
        color: 'grey'

    }));


    return (
        <Box sx={{ ...styleForM, borderRadius: '10px', minwidth: '30px' }}>

            <FormControl sx={{ m: 1, minWidth: '420px', minHeight: '50px' }}  >
                <Grid container spacing={0.5} columns={12} >
                    <Grid item xs={12} md={12}>

                        <TextField
                            // paddingLeft= "0px" paddingTop= "0px"
                            // paddingRight= "0px" paddingBottom= "0px"

                            value={dialogTaskName}
                            onChange={handleDialogTaskName}
                            id="name"
                            placeholder='Task name'
                            type="email"
                            fullWidth
                            variant="standard"
                            inputProps={{
                                style: {
                                    height: "4px",

                                }
                            }}
                            InputProps={{ disableUnderline: true }}
                        />

                    </Grid>

                    <Grid item xs={12} md={12} padding={0}>

                        <TextField
                            value={dialogTaskDescription}
                            onChange={handleDialogTaskDescription}
                            autoFocus
                            id="name"
                            placeholder='Description'
                            type="email"
                            margin="none"
                            fullWidth
                            variant="standard"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                        />

                    </Grid>

                    <Grid item xs={3.55} md={1.9}>
                        <React.Fragment>

                            <LocalizationProvider dateAdapter={DateFnsUtils}>
                                <DatePicker
                                    open={isForcePickerOpen}
                                    onClose={() => setIsOpen(false)}
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    renderInput={({
                                        ref,
                                        inputProps,
                                        disabled,
                                        onChange,
                                        value,
                                        ...other
                                    }) => (
                                        <div ref={ref} {...other}>
                                            <input
                                                style={{ display: "none" }}
                                                value={value}
                                                onChange={onChange}
                                                disabled={disabled}
                                                {...inputProps}
                                            />
                                            <Tooltip title="Set due date" placement="left">
                                                <CustomButton
                                                    variant="outlined"
                                                    padding='0px'

                                                    color="primary"
                                                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                                                ><EventNoteIcon />
                                                    {"Due date"}
                                                    <Tooltip title="Remove due date" placement="right">

                                                        <CustomButtonclose
                                                            size='small'
                                                            onClick={handleCloseDate}
                                                        >
                                                            <CloseIcon />
                                                        </CustomButtonclose>
                                                    </Tooltip>
                                                </CustomButton>
                                            </Tooltip>
                                        </div>
                                    )}
                                />
                            </LocalizationProvider>
                        </React.Fragment>
                    </Grid>

                    <Grid item xs={3.5} md={1.8}  >
                        <Tooltip title="Set priority p1, p2, p3, p4">
                            <CustomButton
                                //sentenceCase
                                aria-label="more"
                                id="long-button"
                                variant='outlined'
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                //onClick={handleClick}   
                                fullWidth

                            ><EmojiFlagsIcon />
                                Priority
                            </CustomButton>
                        </Tooltip>
                    </Grid>
                    {/* <Grid item xs={4} md={0}>
                        </Grid> */}
                    <Grid item xs={5.2} md={2.5} >
                        <Tooltip title="Add Reminders">
                            <CustomButton
                                //sentenceCase  
                                aria-label="more"
                                id="long-button"
                                variant='outlined'
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                //onClick={handleClick}   
                                fullWidth

                            ><AccessAlarmIcon />
                                Reminders
                                <CustomButtonred>PRO</CustomButtonred>
                            </CustomButton>
                        </Tooltip>


                    </Grid>

                    <Grid item xs={0.3} md={0.1}>
                        <CustomButton
                            //sentenceCase  
                            aria-label="more"
                            id="long-button"
                            variant='outlined'
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            //onClick={handleClick}   
                            fullWidth
                        ><MoreHorizIcon />
                        </CustomButton>
                        {/* <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }} */}
                        {/* // anchorEl={anchorEl}
                            // open={opendot}
                            // onClose={handleClosedot}
                            // PaperProps={{ */}
                        {/* //     style: { */}
                        {/* //         maxHeight: ITEM_HEIGHT * 4.5,
                            //         width: '20ch',
                            //     },
                            // }}
                            > */}
                        {/* {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClosedot}>
                                        {option}
                                    </MenuItem>
                                ))} */}
                        {/* </Menu> */}

                    </Grid>

                    <Grid item xs={4} md={12}>
                    </Grid>
                    <Divider style={{ width: '100%' }} />

                    <Grid item xs={8} sm={8} md={9}>

                        {/* Home / Inspiration */}
                        <Tooltip title="Select a project">
                            <Select
                                value={priority}
                                label="Inbox"
                                margin="none"
                                padding="0"
                                variant="standard"
                                textAlign="center"  
                                justifycontent="center" 
                                size="small"
                                borderRadius= '10px'
                                disableUnderline= 'true ' 
                                onChange={handlePriorityChange}
                                sx={{
                                    width: '20%',
                                    height: '70%',
                                    borderRadius: '10px',
                                    fontSize: '12px',                                  
                                    "&:hover": {
                                        bgcolor: '#F5F5F5',
                                        color: 'black',
                                        borderColor: 'black',
                                        borderRadius: '10px'
                                    },
                                }}

                            >
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
                        </Tooltip>

                    </Grid>

                    {/* <Stack direction="row-reverse" spacing={1}
                        paddingTop={5}> */}

                    <Grid item xs={2} sm={2} md={1.5}>

                        <Button
                            sx={{
                                width: '90%', fontSize: '10px',
                                bgcolor: '#CED2C2',
                                color: 'black',
                                borderColor: '#CED2C2',
                                ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' },
                                margin: theme.spacing(1),
                                [theme.breakpoints.down("sm")]: {
                                    minWidth: 22,
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

                    <Grid item xs={2} sm={2} md={1.5}>

                        <Button
                            style={{
                                margin: theme.spacing(1),
                                [theme.breakpoints.down("sm")]: {
                                    minWidth: 22,
                                    "& .MuiButton-startIcon": {
                                        margin: 0
                                    }
                                }
                            }}
                            sx={{
                                paddingLeft: '0px', paddingRight: '0px',
                                width: '80%', fontSize: '10px',
                                bgcolor: 'red'
                            }}
                            onClick={handleAdd}
                            endIcon={<DoneIcon />}
                            margin="none"
                            padding="0"
                            variant="contained"
                            size="small"
                        >Add</Button>

                    </Grid>
                </Grid>
            </FormControl>
        </Box >

    );
}
