import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar1 from '../avatar1.jpg';
import Typed from 'react-typed';

//CSS styles

const Header = () => {
    return (
        <Box>
            <Avatar src={avatar1} alt="Kiran Kumar" />
            <Typography variant = "h4">
                <Typed strings={["Kiran Kumar"]} typeSpeed={40}/>
            </Typography>
            <br />
            <Typography variant = "h5">
                <Typed strings={["Software Engineer", "Web Development", "MERN Stack"]}
                    typeSpeed={40}
                    backSpeed={60}  
                    loop
                />
            </Typography>
       </Box>
    ) 
}

export default Header;
