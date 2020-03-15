import React, { Component } from 'react'
import BannerLeft from './Banner/BannerLeft'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BannerRight from './Banner/BannerRight';
import BannerBot from './Banner/BannerBot';
import styles from './styles'
import {withStyles} from '@material-ui/core';
import SectionPrice from './SectionPrice';
import Phone from './Phone/Phone';
import Laptop from './Laptop/Laptop';
import Tablet from './Tablet/Tablet';
import PhuKien from './PhuKien';
import PhuKienApple from './PhuKienApple';
import DongHo from './DongHo';
 class Main extends Component {
  render() {
    let {classes}=this.props;
    return (
      <Container maxWidth="lg"  >
      <Paper elevation={0}  >
          <Container  className={classes.wrapper}>
          <Grid container >
                  <Grid item xs={8}>
                        <BannerLeft/>
                  </Grid>
                  <Grid item xs={4}>
                      <BannerRight/>
                  </Grid>
                  <Grid item xs={12}>
                     <BannerBot />
                  </Grid>
                  <Grid item xs={12}>
                     <SectionPrice/>
                  </Grid>
                  <Grid item xs={12}>
                     <Phone/>
                  </Grid>
                  <Grid item xs={12}>
                     <Laptop/>
                  </Grid>
                  <Grid item xs={12}>
                     <Tablet />
                  </Grid>
                  <Grid item xs={12}>
                     <PhuKien/>
                  </Grid>
                  <Grid item xs={12}>
                     <PhuKienApple/>
                  </Grid>
                  <Grid item xs={12}>
                     <DongHo/>
                  </Grid>
                  
                
                  
          </Grid>
          </Container>
      </Paper>
      
  </Container>
    )
  }
}

export default withStyles(styles)(Main)
