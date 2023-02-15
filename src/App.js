import './App.css';
import * as React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

function GetCard() {
  const [open, setOpen] = React.useState(false);
  const [dialogText, setDialogText] = React.useState('');
  const [todoCol, settodoCol] = React.useState([]);
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


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    
    if (dialogText == '')
      return;

    setOpen(false);
    
      settodoCol([...todoCol, dialogText])
      setDialogText("")

  };

  const handleDialogText = (e) => {
    setDialogText(e.target.value);
  };


console.log(todoCol)
  return (
    <div>
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <List sx={{
            width: '100%', maxWidth: 360,
            bgcolor: 'background.paper'
          }}>
            {todoCol.map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
                 
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>Add task</Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'md'}>
        <DialogTitle>Add tasks</DialogTitle>
        <DialogContent>
          <TextField
            value={dialogText}
            onChange={handleDialogText}
            autoFocus
            margin="dense"
            id="name"
            label="Remind yourself by writing here"
            type="email"
            fullWidth
            variant="standard"

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



function App() {
  return (
    <div>
      <Grid

        container
        margin={1}
        spacing={10}

        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <GetCard> </GetCard>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
