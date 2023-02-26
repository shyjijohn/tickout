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
import Radio from '@mui/material/Radio';
import { Box } from '@mui/system';

import { Stack } from '@mui/material';


export default function GetTodoListView({ items }) {

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <List sx={{
        width: '100%', maxWidth: 360,
        bgcolor: 'background.paper'
      }}>
        {items.map((value) => {
          const labelId = `checkbox-list-label-${value.name}`;
          return (
            <ListItem
              key={value.name}

              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value.name)} dense>
                <ListItemIcon>
                  <Radio
                    edge="start"
                    checked={checked.indexOf(value.name) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>

  );
}


