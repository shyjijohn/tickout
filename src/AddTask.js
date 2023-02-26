
import * as React from 'react';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';

import { Stack } from '@mui/material';
import { Task } from './Task';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import OutlinedInput from '@mui/material/OutlinedInput';
import { Height } from '@mui/icons-material';







export default function AddTask({ appendTaskFn }) {

    //class - object
    //    const [item, setItem] = React.useState({});
    //class - object array
    //    const [itemCol, setItemCol] = React.useState([{}]);

    const [dialogTaskName, setDialogTaskName] = React.useState('');
    const [dialogTaskDescription, setDialogTaskDescription] = React.useState('');
    const [dateInput, setDateInput] = React.useState(dayjs('2014-08-18T21:11:54'));
    //const [value, setValue] = React.useState('2014-08-18T21:11:54');

    const [priority, setPriority] = React.useState('');
    // const [Reminder, setReminder] = React.useState('');
    // const [Extra, setExtra] = React.useState('');
    // const [HomeInspiration, setHomeInspiration] = React.useState('');



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
        maxWidth: 810,
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




    return (
        <Box sx={{ ...styleForM, borderRadius: '16px', minwidth: 120 }} margin="0"
            padding="0">

            <FormControl sx={{ m: 1, minWidth: 120 }}  >
                <Grid container spacing={1}  >
                    <Grid item xs={12}>

                        <TextField
                            value={dialogTaskName}
                            onChange={handleDialogTaskName}
                            id="name"
                            label="Task name"
                            type="email"
                            fullWidth
                            variant="outlined"
                            size="small"
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
                            variant="outlined"
                            size="small"
                        />

                    </Grid>

                    <Grid item xs={6} md={3}>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                style={{
                                    minwidth: 190,
                                    minHeight: 30,
                                    fontSize: 6
                                }}

                                margin="none"

                                variant="outlined"
                                size="small"
                                label="Date&Time picker"
                                value={dateInput}
                                onChange={handleDateTimePickerChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                    </Grid>

                    <Grid item xs={6} md={3} bgcolor="blue" aria-hidden="false"  >
                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                        <Select
                            label="Priority"
                            sx={{
                                m: 0,
                                minWidth: 190,
                                bgcolor: 'yellow',

                            }}
                            //input={<OutlinedInput label="Tag" />}
                            bgcolor="green"
                            value={priority}

                            margin="none"
                            padding="0"
                            variant="outlined"
                            size="small"

                            onChange={handlePriorityChange}
                        >

                            <MenuItem value="" bgcolor="red">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Priority 1</MenuItem>
                            <MenuItem value={20}>Priority 2</MenuItem>
                            <MenuItem value={30}>Priority 3</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6} md={3}>

                        {/* Reminder */}
                        <Select
                            sx={{ m: 0, minWidth: 190 }}
                            value={priority}
                            label="priority"
                            margin="none"
                            padding="0"
                            variant="outlined"
                            size="small"
                            onChange={handlePriorityChange}

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Priority 1</MenuItem>
                            <MenuItem value={20}>Priority 2</MenuItem>
                            <MenuItem value={30}>Priority 3</MenuItem>
                        </Select>

                    </Grid>

                    <Grid item xs={6} md={3}>

                        {/* ... */}
                        {/* <InputLabel id="demo-select-small">...</InputLabel> */}
                        <Select
                            sx={{ m: 0, minWidth: 190 }}

                            value={priority}
                            label="priority"
                            margin="none"
                            padding="0"
                            variant="outlined"
                            size="small"
                            onChange={handlePriorityChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Priority 1</MenuItem>
                            <MenuItem value={20}>Priority 2</MenuItem>
                            <MenuItem value={30}>Priority 3</MenuItem>
                        </Select>

                    </Grid>


                    <Grid item xs={6} md={6}>

                        {/* Home / Inspiration */}
                        <Select
                            sx={{
                                m: 0, minWidth: 390,
                                minHeight: 30
                            }}

                            value={priority}
                            label="priority"
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
                        </Select>

                    </Grid>

                    {/* <Stack direction="row-reverse" spacing={1}
                        paddingTop={5}> */}
                    <Grid item xs={3} md={3}>

                        <Button
                            style={{
                                borderRadius: 5,
                                fontSize: 10,
                            }}
                            sx={{
                                width: "100%",
                                height: "40px"
                            }}
                            onClick={handleAdd}
                            endIcon={<DoneIcon />}
                            margin="none"
                            padding="0"
                            variant="contained"
                            size="small"
                        >Add</Button>

                    </Grid>

                    <Grid item xs={3} md={3}>

                        <Button
                            style={{
                                borderRadius: 5,
                                fontSize: 10,

                            }}
                            sx={{
                                width: "100%",
                                height: "40px"
                            }}
                            onClick={handleCancel}
                            startIcon={<ClearIcon />}
                            margin="none"
                            padding="0"
                            variant="contained"
                            size="small"
                        >Cancel</Button>

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
