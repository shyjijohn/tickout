
import * as React from 'react';

import { createTheme } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';

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
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from "@mui/material/InputAdornment";

import useMediaQuery from '@mui/material/useMediaQuery';
import LabelIcon from '@mui/icons-material/Label';
import ExtensionIcon from '@mui/icons-material/Extension';

const ITEM_HEIGHT = 48;



function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
        variant='outlined'
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            size: "small",
            textTransform: 'none',
            padding: '2px',
            textAlign: 'center',
            variant: 'outlined',
            fontSize: '12px',
            color: 'grey',
            borderradius: '25px solid',  
            borderColor: '#B2BEB5', ':hover':
            {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black'
            },
    
          }}
        >
          <MoreHorizIcon />
        </Button>
        <Menu
          id="basic-menu"
          
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        
        >
          <MenuItem onClick={handleClose}sx={{fontSize: '12px'}}><LabelIcon />&nbsp;&nbsp;Labels</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}sx={{fontSize: '12px'}}><ExtensionIcon />&nbsp;&nbsp;Add extension...</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}sx={{color:"red",fontSize: '12px'}}>Edit task actions</MenuItem>
        </Menu>
      </div>
    );
  }


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

    const [age, setAge] = React.useState('');
    const [closeDate, setCloseDate] = useState(false);





    const [isForcePickerOpen, setIsOpen] = useState(false);
    // const [selectedDate, handleDateChange] = useState(new Date());




    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };


    const handleCancel = () => {
        setDialogTaskName("")
        setDialogTaskDescription("")
    };


    const handleAdd = () => {


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
        fontSize: '8px',
        border: 1,
        maxWidth: 800,
        maxheight: 150,
        paddingLeft: "0px", paddingTop: "5px",
        paddingRight: "0px", paddingBottom: "0px"

    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
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


    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            color: 'grey',
            fontWeight: 'normal',
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            // backgroundColor: 'green',
            spacing: '0px',
            fontSize: 12,
            //   padding: '10px 26px 10px 12px',
            padding: '2px',
            width: 'inherit',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            ':hover':
            {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black'
            },
        },
    }));


    //more button

    // const [moreMenuAnchor, setMoreMenuAnchor] = React.useState(null);
    // const isMoreMenuOpen = Boolean(moreMenuAnchor);
    // const handleClickmore = (event) => {
    //     setMoreMenuAnchor(event.currentTarget);
    // };
    // const handleClosemore = () => {
    //     setMoreMenuAnchor(null);
    // };





    
    //priority button

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 3.0 + ITEM_PADDING_TOP,
                //width: 150,

            },
        },
    };

    const names = [
        'Priority 1',
        'Priority 2',
        'Priority 3',
        'Priority 4',

    ];



    function getSelectedPriorityItemStyle(hasSelection, theme2) {
        // console.log("has selection ", hasSelection)
        return {

            fontWeight:
                hasSelection === false
                    ? theme2.typography.fontWeightLight
                    : theme2.typography.fontWeightBold,

        };
    }


    const themessss = useTheme();

    const priorities = [
        {
            name: 'Priority 1',
            color: 'secondary'
        },
        {
            name: 'Priority 2',
            color: 'success'
        },
        {
            name: 'Priority 3',
            color: 'primary'
        },
        {
            name: 'Priority 4',
            color: 'action'
        }
    ];

    const [selectedPriorityIndex, setSelectedPriorityIndex] = React.useState(-1);

    const handlePrioritySelection = (event) => {
        console.log("handlePrioritySelection event: ", event);
        console.log("handlePrioritySelection value: ", event.target.value);

        var selIndex = priorities.indexOf(priorities.find(o => o.name === event.target.value));
        setSelectedPriorityIndex(selIndex);
        console.log(selIndex);


        // const priority =
        // {
        //     name:"",
        //     color: "" 
        // };

        // setSelectedPriority(priority)
    }

    //date button
    const dates = [
        {
            name: 'Today',
            color: 'secondary',
            icon: '<CloseIcon/>'
        },
        {
            name: 'Tomorrow',
            color: 'success',
            icon: '<CloseIcon/>'
        },
        {
            name: 'This weekend',
            color: 'primary',
            icon: '<CloseIcon/>'
        },
        {
            name: 'Next week',
            color: 'action',
            icon: '<CloseIcon/>'
        }
    ];




    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (event) => {
        console.log("handlePrioritySelection event: ", event);
        console.log("handlePrioritySelection value: ", event.target.value);

        var selIndex1 = dates.indexOf(dates.find(o => o.name === event.target.value));
        setSelectedDate(selIndex1);
        console.log(selIndex1);


    }


    //icon button


    // const [showIcon, setshowIcon] = React.useState(false)

    // const handleCancelIcon = (event) => {
    //     console.log("show icon", event);

    //     setshowIcon(true);

    // }

    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    console.log("isMobileView", isMobileView);
    //console.log('breakpoint', theme.breakpoints.down("xs"));
    //isMobileView  ? null : <Typography ADD />>
    return (
        <Box sx={{ ...styleForM, borderRadius: '10px', minwidth: '10px' }}>

            <FormControl sx={{ m: 1, minWidth: '320px', minHeight: '110px' }} md={{ m: 1, minWidth: '420px', minHeight: '50px' }}>
                {/* <FormControl   > */}
                <Grid container spacing={0.7} columns={12} >
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

                    <Grid item xs={12} md={12}>

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

                    <Grid item xs={4.8} md={2}>
                        <React.Fragment>

                            <LocalizationProvider dateAdapter={DateFnsUtils}>
                                {/* <MuiPickersUtilsProvider utils={MomentUtils}> */}
                                <DatePicker
                                    paddingLeft="0px"
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
                                                onChange={handleDateChange}
                                                disabled={disabled}
                                                {...inputProps}
                                            />
                                            <Tooltip title="Set due date" placement="left">
                                                <CustomButton
                                                    fullWidth
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
                                >

                                    {dates.map((d, i) => (
                                        <MenuItem
                                            key={d.name}
                                            value={d.name}
                                        //style={getSelectedPriorityItemStyle(selectedPriorityIndex === i, theme)}
                                        >
                                            <Stack direction="row" spacing={0.5} >
                                                <EmojiFlagsIcon color={d.color} />
                                                <Box sx={{ typography: 'body1' }}>{d.name}</Box>
                                            </Stack>
                                        </MenuItem>

                                    ))}

                                    {/* </MuiPickersUtilsProvider> */}
                                </DatePicker>
                            </LocalizationProvider>
                        </React.Fragment>
                    </Grid>

                    <Grid item xs={3.2} md={1.8}
                    //bgcolor='red'
                    >
                        {/* <Tooltip title="Set priority p1, p2, p3, p4"> */}
                        <Select
                            displayEmpty
                            fullWidth={true}
                            value={selectedPriorityIndex}
                            onChange={handlePrioritySelection}
                            input={<BootstrapInput />}
                            renderValue={(selectedIndex) => {

                                if (selectedIndex === -1) {
                                    return (
                                        <Stack direction="row" spacing={0.5}>
                                            <EmojiFlagsIcon />
                                            <Box
                                                sx=
                                                {{
                                                    typography: 'body1'
                                                }}>
                                                Priority
                                            </Box>
                                        </Stack>
                                    )
                                }
                                else {
                                    return (
                                        <Stack direction="row" spacing={0.5}>
                                            <EmojiFlagsIcon color={priorities[selectedIndex].color} />
                                            <Box
                                                sx=
                                                {{
                                                    typography: 'body1'
                                                }}>
                                                {priorities[selectedIndex].name}
                                            </Box>
                                        </Stack>
                                    )
                                }
                            }}
                        >

                            {priorities.map((p, i) => (
                                <MenuItem
                                    key={p.name}
                                    value={p.name}
                                    style={getSelectedPriorityItemStyle(selectedPriorityIndex === i, theme)}
                                >
                                    <Stack direction="row" spacing={0.5} >
                                        <EmojiFlagsIcon color={p.color} />
                                        <Box sx={{ typography: 'body1' }}>{p.name}</Box>
                                    </Stack>
                                </MenuItem>

                            ))}
                        </Select>


                        {/* </Tooltip> */}


                    </Grid>
                    {/* <Grid item xs={4} md={0}>
                        </Grid> */}
                    <Grid item xs={5.8} md={2.5} >
                        <Tooltip title="Add Reminders">
                            <CustomButton
                                //sentenceCase  
                                aria-label="more"
                                id="long-button"
                                variant='outlined'
                                //    aria-controls={open ? 'long-menu' : undefined}
                                //   aria-expanded={open ? 'true' : undefined}
                                //     aria-haspopup="true"
                                //onClick={handleClick}   
                                fullWidth

                            ><AccessAlarmIcon />
                                Reminders
                                <CustomButtonred>PRO</CustomButtonred>
                            </CustomButton>
                        </Tooltip>


                    </Grid>

                    <Grid item xs={0.1} md={0.1}>
                    <BasicMenu></BasicMenu>

                    </Grid>

                    <Grid item xs={4} md={12}>
                    </Grid>
                    <Divider style={{ width: '100%' }} />

                    <Grid item xs={7} md={9}>

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
                                borderRadius='10px'
                                disableUnderline='true '
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

                    <Grid item xs={2.5} md={1.5}>

                        <Button
                            sx={{
                                width: '90%', fontSize: '10px',
                                bgcolor: '#CED2C2',
                                color: 'black',
                                borderColor: '#CED2C2',
                                "&:hover": {
                                    //you want this to be the same as the backgroundColor above
                                    backgroundColor: '#CED2C2'
                                }
                                // [theme.breakpoints.up('sm')]: {
                                //     ':hover': { bgcolor: '#F5F5F5', color: 'black', borderColor: 'black' },
                                //   }
                            }}

                            // onClick={handleCancelIcon}
                            startIcon={<ClearIcon />}

                            margin="none"
                            padding="0"
                            variant="contained"
                            size="small"
                        >
                            {isMobileView ? null : <typography>CANCEL</typography>}
                        </Button>

                    </Grid>

                    <Grid item xs={2.5} md={1.5}>

                        <Button
                            sx={{
                                width: '90%', fontSize: '10px',
                                bgcolor: 'red',
                                color: 'white',
                                borderColor: '#CED2C2',
                                "&:hover": {
                                    //you want this to be the same as the backgroundColor above
                                    backgroundColor: 'red'
                                }

                            }}
                            onClick={handleAdd}
                            endIcon={<DoneIcon />}
                            margin="none"
                            padding="0"
                            variant="contained"
                            size="small"
                        >
                            {isMobileView ? null : <typography>ADD</typography>}
                        </Button>

                    </Grid>
                </Grid>
            </FormControl>

        </Box >

    );
}


