import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//Material-UI aims to provide a strong foundation for building dynamic UIs.
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import Footer from './Footer';
import MenuIcon from '@material-ui/icons/Menu';

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
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar1 from '../avatar1.jpg'

//CSS style to add style
const useStyles = makeStyles(theme=> ({
    menuSliderContainer: {
        width: 180,
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
    },
    hamburger: {
        display: 'block',
        margin: "0.5 rem auto",
        width: theme.spacing(13),
        height: theme.spacing(4)
    }
}));

//to render UI components
const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Experience",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath:"/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath:"/contacts"
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
            <br />
            <MenuIcon className={classes.hamburger} style={{ color: "tomato" }} /> 
            <Avatar className={classes.avatar} src={avatar1} alt="Kiran Kumar"/>
            <Divider /> 
                <List>
                    {menuItems.map((lsItem, key) => (
                        <ListItem button key={key} component={Link} to={lsItem.listPath}>
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
                    <MenuIcon style={{ color: "tomato" }} />      
                    </IconButton>
                    {/* What kind of text we want ,heading,subitle */}
                    <Typography variant = "h5" style = {{color:"tan"}}>
                            Portfolio
                    </Typography>
                        <MobileRightMenuSlider
                            anchor = "left"
                            open={state.right}
                            onClose={toggleSlider("right", true)}
                        >
                            {sideList("right")}  
                          {/* <Footer />   */}
                    </MobileRightMenuSlider>
                </Toolbar>  
            </AppBar>
        </Box>
        </>
    )          
}

export default Navbar;
