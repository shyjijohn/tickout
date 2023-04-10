import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import { Stack, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function GetTodoListView({ items }) {

  //database get items

  console.log("GetTodoListView start");
  const [checked, setChecked] = React.useState([0]);
  const [mouseHoveringItemName, setMouseHoveringItemName] = React.useState();
  const [editItem, setEditItem] = React.useState();
  const [dateItem, setDateItem] = React.useState();
  const [commentItem, setCommentItem] = React.useState();
  const [moreItem, setMoreItem] = React.useState();


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


  const theme = useTheme();

  const isMobileSchedule = useMediaQuery(theme.breakpoints.down('md'));

  function schedule() {
    return (
      (isMobileSchedule ?
        (<Stack
          marginTop={-3.5}
          name="label2"
          direction="row"
          paddingLeft={25}
          position="relative"
          paddingBottom={0}>
          <BorderColorIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              onClick: 'MyComponent()',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <EventIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <ChatBubbleOutlineIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <MoreHorizIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />
        </Stack >)
        :
        (<Stack
          marginTop={-3.5}
          name="label2"
          direction="row"
          paddingLeft={75}
          position="relative"
          paddingBottom={0}>
          <BorderColorIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <EventIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <ChatBubbleOutlineIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />&nbsp;&nbsp;
          <MoreHorizIcon sx={{
            color: 'grey', "&:hover": {
              bgcolor: '#F5F5F5',
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px'
            },
          }} />
        </Stack >)
      ))
  }


  function isListItemHover(value) {
    console.log("item hover", value.name);
    console.log("--------------------------------------------");
    // setMouseHoveringItemName = value.name;

    // console.log('isListItemHover ', isMouseHover);


    const handleedithover = (e) => {
      setEditItem(e.target.value)
    };
    const handledatehover = (e) => {
      setDateItem(e.target.value)
    };
    const handlecommenthover = (e) => {
      setCommentItem(e.target.value)
    };
    const handlemorehover = (e) => {
      setMoreItem(e.target.value)
    };


    return (
      mouseHoveringItemName === value.name ?
        <Stack
          name="label2"
          direction="row"
          position="relative"
          display="inline-flex"
          justifyContent="flex-end"
          paddingBottom={7}>
          <BorderColorIcon
            onClick={handleedithover}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }} />&nbsp;&nbsp;
          <EventIcon
            onClick={handledatehover}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }} />&nbsp;&nbsp;
          <ChatBubbleOutlineIcon
            onClick={handlecommenthover}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }} />&nbsp;&nbsp;
          <MoreHorizIcon
            onClick={handlemorehover}
            sx={{
              color: 'grey', "&:hover": {
                bgcolor: '#F5F5F5',
                color: 'black',
                borderColor: 'black',
                borderRadius: '5px'
              },
            }} />
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

      <div>
        <Typography
          paddingLeft={0.5}
          fontWeight="bold"
          fontSize="20px"
        >
          Schedule
        </Typography>
        <div>{schedule()}</div>
      </div>


      <List sx={{
        boxSizing: "border-box",
        width: '100%', maxWidth: 800,
        bgcolor: 'background.paper'
      }}>
        {items.map((value) => {

          if (value === undefined)
            return null;
          if (value.length === 0)
            return null;


          console.log('value casted to date', new Date(value.date).toDateString());
          //console.log('value not casted', value.date.toDateString());
          // console.log(value.date.toString());
          const labelId = `checkbox-list-label-${value.name}`;
          console.log("item hover", labelId);

          //console.log('Item index', items.indexOf(value.name));
          return (
            <ListItem
              sx={{
                boxSizing: "border-box",
                justifyContent: "center ",
                alignItems: "left "
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
                  boxSizing: "border-box",
                  marginLeft: "-15px",

                }}>
                <ListItemIcon
                  sx={{
                    // borderLeftWidth: "0px",
                    // marginLeft: "0px",
                    // padddingLeft: "0px",
                    // borderRightWidth: "0px",
                    // marginRight: "-0px",
                    // padddingRight: "0px"
                    justifyContent: "left ",
                    alignItems: "left "
                  }} >
                  <Radio
                    edge="start"
                    checked={checked.indexOf(value.name) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    sx={{
                      justifyContent: "left ",
                      alignItems: "left ",
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
                <Stack name="label1" direction="column"
                  sx={{
                    display: "block",
                    boxSizing: "border-box",
                    justifyContent: "left ",
                    alignItems: "left "
                  }} >
                  <ListItemText
                    sx={{ boxSizing: "border-box", display: "flex", flexWrap: "inherit" }}
                    id={labelId}
                    primary={value.name} />
                  <ListItemText
                    sx={{ boxSizing: "border-box", display: "flex", flexWrap: "inherit" }}
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
                      primary={new Date(value.date).toDateString()}
                      sx={{
                        color: "#D0312D"
                      }} />

                    {/* {Divider()}  */}

                  </Stack>
                </Stack>
              </ListItemButton>
              <Stack sx={{
                boxSizing: "border-box",
              }}
              >{isListItemHover(value)}</Stack >
            </ListItem>
          );
        })}
      </List>
    </div>

  );
}


