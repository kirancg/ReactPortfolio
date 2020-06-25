import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Toolbar from '@material-ui/core/ToolBar';
import {
    Typography,
    Box
} from '@material-ui/core';
import Navbar from './Navbar';
import Particles from 'react-particles-js';

const useStyles = makeStyles(theme => ({
    particlesCanva: {
        position: "absolute",
        opacity:"0.3"
    },
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
         }
    },

    timeLineItem: {
        padding: "1rem",
        borderbottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor:"tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "8.375rem",
        margin: "0 3rem 0 auto",
        fontsize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5 rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Particles
                    canvasClassName={classes.particlesCanva}
                    paramas={{
                        particles: {
                            number: {
                                value: 45,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            shape: {
                                type: "star",
                                stroke: {
                                    width: 1,
                                    color: 'tomato'
                                }
                            },
                            size: {
                                value: 8,
                                random: true,
                                // animation: false,
                                anim: {
                                    enable: true,
                                    speed: 8,
                                    size_min: 0.1,
                                    sync: true
                                }
                            },
                            opacity: {
                                values: 1,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: true
                                }
                            }
                        }
                    }}
                />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>Work Experience</Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h4" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                   Mar 2016
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                            Software Engineer
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            Tata Consultancy Services
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            Development of web application to manage business process related to payments of user services. Developed REST APIs for this application using Spring Boot.
                            Refactored the existing code, added new features according to the requirements of the customer

                    </Typography>
                    </Box>
                    <Typography variant="h4" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    July 2018
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                            Web Developer
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            Tata Consultancy Services
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                    Designed page layout using HTML5, CSS3 with JavaScript for internal insurance portal. Tackled various issues related to browser compatibility to accommodate advanced technologies.
                    </Typography>
                    </Box>
                    {/* Third value */}

                    <Typography variant="h4" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    Sep-2019
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                            Grad Student <br/>
                            Full Stack Developer
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            Northeastern University
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Studying Information Systems at Northeastern University and worked on software development projects as part of the course curriculam(Java and JavaScript)
                    </Typography>
                </Box>


                </Box>
            </Box>
        </>
    )
}

export default Resume;
