import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles'
import {
    BottomNavigation, BottomNavigationAction
} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';

const useStyles = withStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            maxWidth: 250
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