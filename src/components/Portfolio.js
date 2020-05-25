import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'

import Navbar from './Navbar';
//interchanged project 1 and project2
import project1 from '../images/javascript-fullstack.jpg';
//import project2 from '../images/html-css-javascript-lg.jpg';
import project3 from '../images/react.jpg';
import project4 from '../images/mern-stack.jpg';
//care n cure
import project2a from '../images/project2a.png';
import project5 from '../images/database-design.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    CardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
}) 

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* project4 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.CardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 4"
                            height = "140"
                            image = {project4}
                        />
                            <CardContent>
                                <Typography gitterBottom variant="h5">
                                    Roommate Connector
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                               It is platform that allows university students to connect with like minded individuals to become roommates .
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size ="small" color="primary"  >
                                    {/* <Link href="https://www.linkedin.com/in/kiran-cg/">Share</Link> */}
                                    <a href = "https://github.com/kirancg/RoomateFinder" target="_blank">Github</a>
                                   
                                </Button>
                                <Button size ="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>    
                </Grid>
                


                {/* project1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.CardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 1"
                            height = "140"
                            image = {project1}
                        />
                            <CardContent>
                                <Typography gitterBottom variant="h5">
                                    Rock Paper Scissors
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                Rock paper scissors game from scratch including the HTML, CSS and JavaScript. No libraries or frameworks, just pure vanilla JavaScript.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size ="small" color="primary">
                                <a href = "https://github.com/kirancg/Rock-Paper-Scissors" target="_blank">Github</a>
                                </Button>
                                <Button size ="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>    
                </Grid>

                {/* project2 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.CardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 2a"
                            height = "140"
                            image = {project2a}
                        />
                            <CardContent>
                                <Typography gitterBottom variant="h5">
                                    Care n Cure
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                This is a healthcare app that integrates all medical services under one umbrella
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size ="small" color="primary">
                                <a href = "https://github.com/kirancg/AED_JavaProject" target="_blank">Github</a>
                                </Button>
                                <Button size ="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>    
                </Grid>
                {/* project3 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.CardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 3"
                            height = "140"
                            image = {project3}
                        />
                            <CardContent>
                                <Typography gitterBottom variant="h5">
                                    Resort Room
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                Beach resort website project. The project uses React router and React context API
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size ="small" color="primary">
                                <a href = "https://github.com/kirancg/ResortRooms" target="_blank">Github</a>
                                </Button>
                                <Button size ="small" color="primary">
                                <a href = "https://resortbeachroom.netlify.app/" target="_blank">Live Demo</a>
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>    
                </Grid>

                {/* project4 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.CardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project 4"
                            height = "140"
                            image = {project5}
                        />
                            <CardContent>
                                <Typography gitterBottom variant="h5">
                                    University Safety Management System
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                Database design and implementation of University Safety Management System
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size ="small" color="primary">
                                <a href = "https://github.com/kirancg/University-Safety-Management-System" target="_blank">Github</a>
                                </Button>
                                <Button size ="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio;
