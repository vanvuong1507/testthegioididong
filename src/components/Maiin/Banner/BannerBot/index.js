import React, { Component } from 'react'
import {withStyles} from '@material-ui/core'
import styles from './styles'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import bannerbot from './img/bannerbot.png'
 class BannerBot extends Component {
    render() {
        let {classes}=this.props;
        return (
           <Container maxWidth="xl" className={classes.wrapper}  >
               <Card className={classes.root}>
                        <CardActionArea>
                          
                          
                            <CardContent className={classes.wrapperContentBanner}>
                            <CardMedia
                            className={classes.banner1}
                            image={bannerbot}
                            title="Contemplative Reptile"
                            />
                           
                            </CardContent>
                        </CardActionArea>
                        
                </Card>
           </Container>
        )
    }
}


export default withStyles(styles)(BannerBot);