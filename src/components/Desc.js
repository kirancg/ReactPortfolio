import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import Resume from './Resume';
import Particles from 'react-particles-js';

import { makeStyles,withStyles } from '@material-ui/core/styles';
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box
} from "@material-ui/core";


//css styles

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity:"0.3"
    },

})

const Desc = () => {

    const classes = useStyles();

    return (
        <div>
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
                <Typography
                        variant="h4"
                    style={{
                            color: "tomato",
                            textAlign: "center",
                        textTransform: "uppercase",
                        display: "flex",
                        marginTop: "04%",
                        marginLeft: "40%"
                        }}
                    >
                    About Me
                </Typography>
                <Typography variant="subtitle1" align="center" style={{
                    color: "tan",
                    marginLeft: "10%",
                    marginRight:"10%"
                }}>
                I'm an Information Systems Graduate Student at Northeastern University,Boston specializing in building exceptional, high-quality websites and applications.

                With 3+ years of experience working in a corporate environment as a Full Stack Web Developer, I have acquired strong technical skills in complex website development including cloud-based applications.

                </Typography>
            </>
        </div>
    )
}

export default Desc;
