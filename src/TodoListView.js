import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';

import { Divider, ListSubheader, Stack } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';


import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


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
          paddingLeft={59}
          position="relative"
          justifyContent= "flex-end"
          paddingBottom={7}>
          <BorderColorIcon sx={{ color: 'grey' , "&:hover": {
                                        bgcolor: '#F5F5F5',
                                        color: 'black',
                                        borderColor: 'black',
                                        borderRadius: '5px'
                                    },}} />&nbsp;&nbsp;
          <EventIcon sx={{ color: 'grey', "&:hover": {
                                        bgcolor: '#F5F5F5',
                                        color: 'black',
                                        borderColor: 'black',
                                        borderRadius: '5px'
                                    }, }} />&nbsp;&nbsp;
          <ChatBubbleOutlineIcon sx={{ color: 'grey', "&:hover": {
                                        bgcolor: '#F5F5F5',
                                        color: 'black',
                                        borderColor: 'black',
                                        borderRadius: '5px'
                                    }, }} />&nbsp;&nbsp;
          <MoreHorizIcon sx={{ color: 'grey', "&:hover": {
                                        bgcolor: '#F5F5F5',
                                        color: 'black',
                                        borderColor: 'black',
                                        borderRadius: '5px'
                                    }, }} />
        </Stack >

        : <Stack
          name="label2"
          display="none">
          <BorderColorIcon></BorderColorIcon>
        </Stack>
    )
  }

  console.log("going to call html");
  return (
    <div >
      <List sx={{
        width: '100%', maxWidth: 800,
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
            sx={{
              borderLeftWidth: "0px",
              marginLeft: "0px",
              padddingLeft: "0px",
              borderRightWidth: "0px",
              marginRight: "0px",
              padddingRight: "0px"
            }}
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
              <ListItemButton role={undefined} onClick={handleToggle(value.name)} dense 
              sx={{
                borderLeftWidth: "0px",
                marginLeft: "-18px",
                padddingLeft: "0px",
                borderRightWidth: "0px",
                marginRight: "0px",
                padddingRight: "0px"
              }}>
                <ListItemIcon
                 sx={{
                  borderLeftWidth: "0px",
                  marginLeft: "0px",
                  padddingLeft: "0px",
                  borderRightWidth: "0px",
                  marginRight: "-22px",
                  padddingRight: "0px"
                }} >
                  <Radio
                    edge="start"
                    checked={checked.indexOf(value.name) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    sx={{ 
                      borderLeft: "0px",
                      borderRight: "0px",
                      marginLeft: "0px",
                      marginRight: "0px",
                      paddingLeft: "0px", 
                      paddingRight: "0px",               
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
                        color: "#D0312D"
                      }}
                    />&nbsp;
                    <ListItemText
                      id={labelId}
                      primary={value.date.toDateString()} 
                      sx={{
                        color: "#D0312D"
                      }}/>
                     
                      {/* {Divider()}  */}
                     
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


