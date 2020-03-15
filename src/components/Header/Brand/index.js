import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from "./styles"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import img from './img/a.png'
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 class Brand extends Component {
    
    render() {
        var {classes}=this.props;
        return (
            
                
            <div className={classes.backGround}>
                <Grid container>
                    <Grid item xs={6} className={classes.color}>
                      
                        <Link exact="true" to="/" >
                        <Paper elevation={0} >
                        <img className={classes.imgFluid}  src={img}/>
                         </Paper>
                        </Link>
                      
                    
                    </Grid>
                    <Grid item xs={6}  className={classes.color}>
                        <Paper component="form" className={classes.root}>
                            
                            <InputBase
                                className={classes.input}
                                placeholder="Ban tim gi"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Divider className={classes.divider} orientation="vertical" />
                         
                            </Paper>
                    </Grid>
                </Grid>
            </div>
            
           
        )
    }
}

export default withStyles(styles)(Brand)