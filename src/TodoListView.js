import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';

import { Stack } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';


import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import GridViewIcon from '@mui/icons-material/GridView';


export default function GetTodoListView({ items }) {
  console.log("GetTodoListView start");
  const [checked, setChecked] = React.useState([0]);
  //const [isMouseHover, setIsMouseHover] = React.useState(false);
  const [mouseHoveringItemName, setMouseHoveringItemName] = React.useState();

  const handleToggle = (nameAsValue) => () => {

    console.log('handleToggle value', nameAsValue);
    const currentIndex = checked.indexOf(nameAsValue);
    const newChecked = [...checked]; //copy to new array

    if (currentIndex === -1) {
      newChecked.push(nameAsValue);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log('Checked', checked);
    console.log('newChecked', newChecked);

    setChecked(newChecked);
  };

  // const handleMouse = (value) => () => {

  //   console.log('handleMouse value', value);
  //   const mouseHoveringItemName = isMouseHoverIndex.indexOf(value);
  //   const newValue = [...isMouseHoverIndex];
  //   if (currentHoverIndex === -1) {
  //     newValue.push(items);
  //   } else {
  //     newValue.splice(currentHoverIndex, 1);
  //   }
  // }

  function isListItemHover(value) {
    console.log("item hover", value.name);
    console.log("--------------------------------------------");
    // setMouseHoveringItemName = value.name;

    // console.log('isListItemHover ', isMouseHover);
    return (
      mouseHoveringItemName === value.name ?
        <Stack
          name="label2"
          direction="row"
          paddingBottom={7}>
          <CommentIcon sx={{ color: 'grey' }} />&nbsp;&nbsp;
          <SaveIcon sx={{ color: 'grey' }} />&nbsp;&nbsp;
          <GridViewIcon sx={{ color: 'grey' }} />&nbsp;&nbsp;
          <ShareIcon sx={{ color: 'grey' }} />
        </Stack >

        : <Stack
          name="label2"
          display="none">
          <CommentIcon></CommentIcon>
        </Stack>
    )
  }

  console.log("going to call html");
  return (
    <div >
      <List sx={{
        width: '100%', maxWidth: 960,
        bgcolor: 'background.paper'
      }}>
        {items.map((value) => {

          if (value === undefined)
            return null;
          if (value.length === 0)
            return null;


          console.log('value', value.name);
          // console.log(value.date.toString());
          const labelId = `checkbox-list-label-${value.name}`;
          console.log("item hover", labelId);

          //console.log('Item index', items.indexOf(value.name));
          return (
            <ListItem
              onMouseOver={() => {
                console.log("mouse hover on item!!!!!!!", value.name)
                 setMouseHoveringItemName(value.name);
                //  if(value.name === -1)
                // {

                // }
                console.log("mouse hovering now", value)

                // { handleMouse() }
                //setIsMouseHover(true)
              }}

              onMouseOut={() => {
                setMouseHoveringItemName(null);

                console.log("mouse out of item*********", value.name)
               // setIsMouseHover(false)
              }}
              key={value.name}
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value.name)} dense >
                <ListItemIcon>
                  <Radio
                    edge="start"
                    checked={checked.indexOf(value.name) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    sx={{
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
                <Stack name="label1" direction="column"  >
                  <ListItemText
                    id={labelId}
                    primary={value.name} />
                  <ListItemText
                    id={labelId}
                    primary={value.description} />
                  <Stack direction="row">
                    <EventIcon
                      sx={{
                        color: "grey"
                      }}
                    />&nbsp;
                    <ListItemText
                      id={labelId}
                      primary={value.date.toDateString()} />
                  </Stack>
                </Stack>

                <Stack>{isListItemHover(value)}</Stack >

              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>

  );
}


