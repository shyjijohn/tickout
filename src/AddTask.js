
import * as React from 'react';

import Button from '@mui/material/Button';

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


import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';

import { Stack } from '@mui/material';
import { Task } from './Task';




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

    const styleForM = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 0.25,
        border: 1,
        maxWidth: 600,
        // display:"flex",
        // width: '35rem',
        // height: '11rem',
        padding: '1rem'
    };

    const handleDateTimePickerChange = (newValue) => {
        setDateInput(newValue);
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };



    return (
        <Box sx={{ ...styleForM, borderRadius: '16px' }}>
            <TextField
                value={dialogTaskName}
                onChange={handleDialogTaskName}
                autoFocus
                margin="dense"
                id="name"
                label="Task name"
                type="email"
                fullWidth
                variant="standard"
                size="small"


            />
            <Box>
                <TextField
                    value={dialogTaskDescription}
                    onChange={handleDialogTaskDescription}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Description"
                    type="email"
                    fullWidth
                    variant="standard"
                    size="small"
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Date&Time picker"
                        value={dateInput}
                        onChange={handleDateTimePickerChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Priority</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={priority}
                        label="Priority"
                        onChange={handlePriorityChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Priority 1</MenuItem>
                        <MenuItem value={20}>Priority 2</MenuItem>
                        <MenuItem value={30}>Priority 3</MenuItem>
                    </Select>
                </FormControl>

                <Stack direction="row-reverse" spacing={1}
                    paddingTop={0.5}>
                    <Button
                        style={{
                            borderRadius: 35,
                            fontSize: 10,
                        }}
                        onClick={handleAdd}
                        endIcon={<DoneIcon />}
                        variant="outlined"
                    >Add</Button>

                    <Button
                        style={{
                            borderRadius: 35,
                            fontSize: 10,
                        }}
                        onClick={handleCancel}
                        startIcon={<ClearIcon />}
                        variant="outlined"
                    >Cancel</Button>


                </Stack>
            </Box>
        </Box>

    );
}