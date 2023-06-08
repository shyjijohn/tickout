
import * as React from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Divider, Stack } from '@mui/material';
import { Task } from './Task';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LabelIcon from '@mui/icons-material/Label';
import ExtensionIcon from '@mui/icons-material/Extension';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import axios from 'axios'
import AppDrawer from './AppDrawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function PrioritiesButton() {

    const [selectedPriorityIndex, setSelectedPriorityIndex] = React.useState(-1);
    const theme = useTheme();

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




    //priority


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


    const onClickOfMenuitem = (event) => {
        //console.log("onClickOfMenuitem called");
        //console.log("onClickOfMenuitem  event", event);
        // console.log("onClickOfMenuitem  value", event.target.innerText);


        // console.log("handlePrioritySelection event: ", event);
        // console.log("handlePrioritySelection value: ", event.target.value);

        var selIndex = priorities.indexOf(priorities.find(o => o.name === event.target.innerText));
        setSelectedPriorityIndex(selIndex);
        //console.log(selIndex);

    }

    function getSelectedPriorityItemStyle(hasSelection, theme2) {
        // console.log("has selection ", hasSelection)
        return {

            fontWeight:
                hasSelection === false
                    ? theme2.typography.fontWeightLight
                    : theme2.typography.fontWeightBold,

        };
    }

    const [anchorPoint, setAnchorPoint] = React.useState(null);
    const open2 = Boolean(anchorPoint);
    const handleClick1 = (event) => {
        setAnchorPoint(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorPoint(null);
    };

    const clearpriority = () => {
        setSelectedPriorityIndex(-1)
        // { handleClose1() };
    }


    function prioritymain() {
        //console.log("priority index", selectedPriorityIndex);
        return (
            selectedPriorityIndex === -1 ? (

                <Stack direction="row" spacing={0.5} paddingLeft='0px' paddingRight='0px'
                >
                    <EmojiFlagsIcon />
                    <Box
                        sx=
                        {{
                            //  bgcolor: 'red',
                            width: 'fit content-box',
                            paddingTop: '2px',
                            typography: 'body1',
                        }}>
                        Priority

                    </Box>
                </Stack>)
                :
                (<Stack direction="row" >
                    <EmojiFlagsIcon color={priorities[selectedPriorityIndex].color} />
                    <Box
                        sx=
                        {{
                            // bgcolor: 'blue',
                            minWidth: '10px',
                            maxWidth: '60px',
                            paddingTop: '2px',
                            typography: 'body1',
                            width: 'fit content',
                            spacing: "1px"
                        }}>
                        {priorities[selectedPriorityIndex].name}
                    </Box>
                    <ClearIcon fontSize='small' onClick={clearpriority} />
                </Stack>)

        )
    }

    return (

        <div>
            <Button
                //displayEmpty
                fullWidth={true}
                value={selectedPriorityIndex}
                input={<BootstrapInput />}
                variant='outlined'
                id="basic-button1"
                aria-controls={open2 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
                onClick={handleClick1}
                sx={{
                    size: "small",
                    textTransform: 'none',
                    padding: '2px',
                    textAlign: 'center',
                    variant: 'outlined',
                    fontSize: '12px',
                    color: 'grey',
                    border: '1px solid',
                    borderColor: '#B2BEB5', ':hover':
                    {
                        bgcolor: '#F5F5F5',
                        color: 'black',
                        borderColor: '#B2BEB5'
                    },

                }}

            >
                <Stack>{prioritymain()}</Stack >
            </Button>

            <Menu
                id="basic-menu1"
                anchorEl={anchorPoint}
                open={open2}
                onClose={handleClose1}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    spacing: '20%'
                }}
            >
                {priorities.map((p, i) => (
                    <MenuItem
                        key={p.name}
                        value={p.name}
                        onClick={onClickOfMenuitem}
                        style={getSelectedPriorityItemStyle(selectedPriorityIndex === i, theme)}
                    >
                        <Stack direction="row" spacing={0.5} >
                            <EmojiFlagsIcon color={p.color} />
                            <Box sx={{ typography: 'body1', fontSize: "12px" }}>{p.name}</Box>
                        </Stack>
                    </MenuItem>

                ))}
            </Menu>

        </div>
    );
}


function MoreOptionsButton() {
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
                    border: '1px solid',
                    borderColor: '#B2BEB5', ':hover':
                    {
                        bgcolor: '#F5F5F5',
                        color: 'black',
                        borderColor: '#B2BEB5'
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
                <MenuItem onClick={handleClose} sx={{ fontSize: '12px' }}><LabelIcon />&nbsp;&nbsp;Labels</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{ fontSize: '12px' }}><ExtensionIcon />&nbsp;&nbsp;Add extension...</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{ color: "red", fontSize: '12px' }}>Edit task actions</MenuItem>
            </Menu>
        </div>
    );
}


export default function AddTask(props) {

    //console.log("isSaveTask ", props.isSaveTask, props);

    const theme = useTheme();

    const [dialogTaskName, setDialogTaskName] = React.useState(props.isSaveTask ?
        props.data.dialogTaskName : '');
    const [dialogTaskDescription, setDialogTaskDescription] = React.useState(props.isSaveTask ?
        props.data.dialogTaskDescription : '');
    const [selectedProject, setSelectedProject] = React.useState();
    const [selectedDate, setSelectedDate] = useState(props.isSaveTask ?
        props.data.selectedDate : new Date());
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    //const [openCancel, setOpenCancel] = React.useState(true);
    //console.log("shyji bullshit", props.data);
    const [projectCollectionFromDb, setProjectCollectionFromDb] = useState([]);
    const [projectID, setProjectID] = useState([]);
    const [currentProjectID, setCurrentProjectID] = useState([]);


    const handleAdd = () => {
        console.log("handleAdd");
        if (dialogTaskName === '')
            return;
        if (props.isSaveTask === true) {
            console.log("update method called");
            axios.put('http://localhost:3002/update', {
                id: props.data.id,
                dialogTaskName: dialogTaskName,
                dialogTaskDescription: dialogTaskDescription,
                selectedDate: selectedDate,
                projectID: currentProjectID
            }).then(() => console.log("Finished updating to database"))
            setDialogTaskName("")
            setDialogTaskDescription("")
            props.endSave();
        }
        else {
            console.log("create method called");
            axios.post('http://localhost:3002/create', {
                dialogTaskName: dialogTaskName,
                dialogTaskDescription: dialogTaskDescription,
                selectedDate: selectedDate,
                projectID: currentProjectID
            }).then(() => console.log("Finished pushing to database"))
            setDialogTaskName("")
            setDialogTaskDescription("")
            // handleCancelClick();
        }
        // handleCancelClick();    
    };

    const handleCancelClick = () => {
        console.log("Cancelling");
        if (props.isSaveTask === true) {
            props.endSave();
        }
    };

    const handleDialogTaskName1 = (e) => {
        setDialogTaskName(e.target.value);
    };

    const handleDialogTaskName2 = (e) => {
        setDialogTaskName(e.target.value);
    };

    const handleDialogTaskDescription = (e) => {
        setDialogTaskDescription(e.target.value);
    };

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


    const CustomButton = styled(Button)(() => ({
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
            borderColor: '#B2BEB5'
        },

    }));


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



    //datepicker

    function getDatePicker() {
        return (
            isMobileView ? <MobileDatePicker
                fullWidth
                inputFormat="MM/DD/YYYY"
                value={selectedDate}
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
                <DesktopDatePicker
                    fullwidth
                    inputFormat="MM/DD/YYYY"
                    value={selectedDate}
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
                                borderRadius: "0px",
                                color: "grey",
                                paddingTop: "3.5px",
                                paddingBottom: "3.5px",
                                paddingLeft: "3.5px",
                                fontSize: "13px",
                                textAlign: "right",
                                borderColor: '#B2BEB5',
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
                >
                </DesktopDatePicker>

        );
    }

    const handleDateChange = (event) => {
        //console.log("handlePrioritySelection event: ", event);
        setSelectedDate(event);
        console.log("setSelectedDate event: ", event);
    }

    //project
    const project = [
        {
            name: 'Inbox',
            color: 'secondary'
        },
        {
            name: 'Home',
            color: 'success'
        },
        {
            name: 'Routines',
            color: 'primary'
        },
        {
            name: 'Inspiration',
            color: 'action'
        }
    ];


    const handleProjectSelection = (event) => {
        console.log("handleProjectSelection event: ", event);
        console.log("handleProjectSelection value: ", event.target.value);

        var selIndex2 = project.indexOf(project.find(o => o.name === event.target.value));
        setSelectedProject(selIndex2);
        console.log(selIndex2);

    }

    // const ProjectSelectionOnChange =(event) => {
    //     var selIndex2 = project.indexOf(project.find(o => o.name === event.target.value));
    //     setSelectedProject(selIndex2);
    //     console.log(selIndex2);
    // }

    const ProjectSelectionOnChange = (event) => {
        setCurrentProjectID(event.target.value);
        console.log("project selection on change", event.target.value);
    };


    const showprojectNameFromDb = () => {
        //console.log("Calling showDataFromDatabase")
        axios.get('http://localhost:3002/project').then((response) => {
            setProjectCollectionFromDb(response.data)
            // console.log("get data: ", response.data);
        })
    }
    showprojectNameFromDb();

    const check = () => {
        console.log("projectdatadatabase")


    }

    const getButtonName = () => {
        return props.isSaveTask ? "Save" : "Add";
    };

    // const getTaskName = () => {
    //     return props.isSaveTask ? "data.dialogTaskName" : "Add";
    // };

    // const getTaskDescription = () => {
    //     return props.isSaveTask ? "Save" : "Add";
    // };

    // const getTaskDate = () => {
    //     return props.isSaveTask ? "Save" : "Add";
    // };


    return (

        <Box sx={{ ...styleForM, boxSizing: "border-box", borderRadius: '10px', minwidth: '10px' }}>
            <FormControl sx={{ m: 1, boxSizing: "border-box", display: "block", minWidth: '30px', minHeight: '110px' }} md={{ m: 1, display: "block", minWidth: '420px', minHeight: '50px' }}>
                <Grid container spacing={0.7} columns={12} >
                    <Grid item xs={12} md={12}>
                        <TextField
                            display="block"
                            value={dialogTaskName}
                            onChange={handleDialogTaskName2}
                            id="name"
                            placeholder='Task name'
                            type="email"
                            fullWidth
                            variant="standard"
                            inputProps={{
                                style: {

                                    boxSizing: "border-box",

                                }
                            }}
                            InputProps={{ disableUnderline: true }} />

                    </Grid>
                    <Grid item xs={12} md={12}>

                        <TextField
                            display="block"
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
                            inputProps={{
                                style: {
                                    boxSizing: "border-box",

                                }
                            }}
                            InputProps={{ disableUnderline: true }}
                        />

                    </Grid>

                    <Grid item xs={4.8} md={1.9}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {getDatePicker()}
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={4} md={1.7}>
                        <PrioritiesButton></PrioritiesButton>

                    </Grid>

                    <Grid item xs={5.8} md={1.7} >
                        {/* <Tooltip title="Add Reminders"> */}
                        <CustomButton
                            aria-label="more"
                            id="long-button"
                            variant='outlined'
                            fullWidth
                        ><AccessAlarmIcon />
                            Reminders
                        </CustomButton>
                        {/* </Tooltip> */}


                    </Grid>

                    <Grid item xs={0.1} md={0.1}>
                        <MoreOptionsButton></MoreOptionsButton>

                    </Grid>

                    <Grid item xs={3} md={18.9}>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Divider style={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={4.5} md={2}>
                        <Tooltip title="Select a project">

                            <Select
                                displayEmpty
                                fullWidth={true}
                                label="Inbox"
                                margin="none"
                                paddingtop="10px"
                                bgcolor='blue'
                                variant="standard"
                                justifycontent="center"
                                size="small"
                                // disableUnderline='true '

                                onChange={ProjectSelectionOnChange}
                                sx={{
                                    borderRadius: '10px',
                                    fontSize: '12px',
                                    color: 'grey',
                                    "&:hover": {
                                        bgcolor: '#F5F5F5',
                                        color: 'black',
                                        borderColor: 'black',
                                        borderRadius: '5px'
                                    },
                                }}>
                                <Stack direction="row" spacing={0.5}>
                                    <AccountTreeIcon sx={{ paddingTop: "5px", paddingLeft: "5px" }} />
                                    &nbsp;&nbsp;&nbsp;
                                    <Box sx={{ typography: 'body1', paddingTop: "8px", borderRadius: '5px', fontWeight: 'bold' }}>
                                        Projects
                                    </Box>
                                </Stack>

                                {projectCollectionFromDb.map((project, projectID) => (

                                    <MenuItem
                                        key={project.projectID}
                                        value={project.projectID}
                                    ><CircleIcon sx={{ height: '10px', width: '10px' }} />
                                        &nbsp;&nbsp;&nbsp;
                                        {project.projectName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Tooltip>

                    </Grid>

                    <Grid item xs={3.9} md={7.6}>
                    </Grid>
                    <Grid item xs={1.5} md={1.2} >
                        {isMobileView ?
                            <Button
                                onClick={handleCancelClick}
                                sx={{
                                    size: "small",
                                    color: "black",
                                    bgcolor: "#BDBDBD",
                                    variant: "outlined",
                                    minWidth: "30%",
                                    height: "28px",
                                    borderLeft: "0px",
                                    margin: "0px",
                                    borderRight: "0px",
                                    "&:hover": {
                                        backgroundColor: '#9E9E9E'
                                    },
                                }}
                            >
                                <ClearIcon fontSize="small" />
                            </Button>

                            : <Button
                                onClick={handleCancelClick}
                                sx={{
                                    color: "black",
                                    bgcolor: "#BDBDBD",
                                    variant: "contained",
                                    minWidth: "60%",
                                    height: "28px",
                                    padding: "5px",
                                    margin: "0px",
                                    border: "0px",
                                    fontSize: "10px",
                                    size: "small",
                                    "&:hover": {
                                        backgroundColor: '#9E9E9E'
                                    },
                                }}
                            >
                                <ClearIcon fontSize="small" />
                                CANCEL
                            </Button>
                        }
                    </Grid>

                    <Grid item xs={1.8} md={1.2}>
                        {isMobileView ?
                            <Button
                                onClick={handleAdd}
                                sx={{
                                    fontSize: "small",
                                    color: "white",
                                    bgcolor: "#D0312D",
                                    variant: "outlined",
                                    minWidth: "30%",
                                    height: "28px",
                                    "&:hover": {
                                        backgroundColor: '#D0312D'
                                    },
                                }}
                            >
                                <DoneIcon fontSize="small" />
                            </Button>
                            :
                            <Button
                                onClick={handleAdd}
                                sx={{
                                    color: "white",
                                    bgcolor: "#D0312D",
                                    variant: "contained",
                                    minwidth: "25px",
                                    height: "28px",
                                    padding: "0px",
                                    margin: "0px",
                                    border: "0px",
                                    fontSize: "10px",
                                    size: "small",
                                    "&:hover": {
                                        backgroundColor: '#D0312D'
                                    },
                                }}
                            >

                                {getButtonName()}

                                <DoneIcon fontSize="small" />
                            </Button>
                        }

                    </Grid>

                </Grid>

            </FormControl>

        </Box >

    );
}


