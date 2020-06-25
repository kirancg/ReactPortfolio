import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from 'react-typed';
import avatar1 from '../avatar1.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';


//import classes from '*.module.css';

//CSS styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        marginBottom : "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar1} alt="Kiran Kumar Gangadharaiah" />
            </Grid>
            <Typography className={classes.title} variant = "h4">
                <Typed strings={["Kiran Kumar Gangadharaiah"]} typeSpeed={40}/>
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant = "h5">
                <Typed strings={["Graduate Student", "Software Engineer", "Web Development", "MERN Stack"]}
                    typeSpeed={30}
                    backSpeed={20}
                    loop
                />

            </Typography>
            <Typography>
                <IconButton  style={{ color: "tan" }} aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/kiran-cg/')}>
                    <LinkedInIcon  fontSize="large" />
                </IconButton>
                <IconButton  style={{ color: "tan" }} aria-label="Github.com" onClick={() => window.open(' https://github.com/kirancg')}>
                <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton  style={{ color: "tan" }} aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/nimma_cg')}>
                <TwitterIcon  fontSize="large"/>
                </IconButton> <br />

                <IconButton  style={{ color: "tan" }} aria-label="Resume.com" onClick={() => window.open('https://www.docdroid.net/x98xyEK/kirankumar-resume-pdf')}>
                    <GetAppIcon fontSize="large"></GetAppIcon>
                    <Typography variant = "h5" style = {{color:"tan"}}> Resume</Typography>
                </IconButton>
            </Typography>
       </Box>
    )
}

export default Header;
