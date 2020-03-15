import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core'
import styles from "./styles"
import Grid from '@material-ui/core/Grid';
import Brand from './Brand';
import MainMenu from './MainMenu';
import SecondMenu from './SecondMenu';

class Header extends Component {
    render() {
        var {classes}=this.props;
        return (
            <Container maxWidth="xl" className={classes.containerFluid} >
                <Paper elevation={0} className={classes.backGround} >
                    <Container>
                    <Grid container >
                            <Grid item xs={4}>
                                   <Brand />
                            </Grid>
                            <Grid item xs={6}>
                                <MainMenu/>
                            </Grid>
                            <Grid item xs={2}>
                                   <SecondMenu/>
                            </Grid>
                    </Grid>
                    </Container>
                </Paper>
                
            </Container>
        )
    }
}



export default withStyles(styles)(Header)