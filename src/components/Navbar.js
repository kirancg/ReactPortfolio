import React,{useState} from 'react'
//Material-UI aims to provide a strong foundation for building dynamic UIs.
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'


//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/ToolBar';
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';
import {
    ArraowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    ArrowBack
} from "@material-ui/icons";
import avatar1 from '../avatar1.jpg'

//CSS style to add style
const useStyles = makeStyles(theme=> ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%',
    },
    avatar: {
        display: 'block',
        margin: "0.5 rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color:"tan"
    }
}));

//to render UI components
const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    }
]


const Navbar = () => {

    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open })
    });
    const classes = useStyles();

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick = {toggleSlider(slider,false)}
        >
            <Avatar className={classes.avatar} src={avatar1} alt="Kiran Kumar"/>
            <Divider /> 
                <List>
                    {menuItems.map((lsItem, key) => (
                        <ListItem button key={key}>
                            <ListItemIcon className={classes.listItem}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                        <ListItemText className={classes.listItem} primary = {lsItem.listText} />
                        </ListItem>
                    ))}
                </List>
        </Box>
    )
    return (
        <>
        <Box component="nav">
            <AppBar position='static' style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                    <ArrowBack style={{ color: "tomato" }} />      
                    </IconButton>
                    {/* What kind of text we want ,heading,subitle */}
                    <Typography variant = "h5" style = {{color:"tan"}}>
                            Pondi
                    </Typography>
                        <MobileRightMenuSlider
                        anchor = "right"
                            open={state.right}
                            onClose = {toggleSlider("right",true)}>
                          {sideList("right")}  
                    </MobileRightMenuSlider>
                </Toolbar>  
            </AppBar>
        </Box>
        </>
    )          
}

export default Navbar;
