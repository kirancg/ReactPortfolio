import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    BottomNavigation, BottomNavigationAction
} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize:"1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = makeStyles()
    return (
        <BottomNavigation width="auto" style={{background:"#222"}}>
            <BottomNavigationAction
                className={classes.root}
                 style={{ padding: 0 }}
                 icon={<LinkedIn/>}
            />
            <BottomNavigationAction
                className={classes.root}
                 style={{ padding: 0 }}
                 icon={<GitHub/>}
            />
            <BottomNavigationAction
                className={classes.root}
                 style={{ padding: 0 }}
                 icon={<Twitter/>}
            />
      </BottomNavigation>
    )
}

export default Footer;