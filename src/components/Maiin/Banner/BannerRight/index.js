import React, { Component } from 'react'
import {withStyles} from '@material-ui/core'
import styles from './styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imgBanner from './img/bannerviettel.jpg'
import Paper from '@material-ui/core/Paper';
import banner1 from './img/banner1.png'
 class BannerRight extends Component {
    render() {
        let {classes}=this.props
        return (
            <div>
                <div>
                 <Card className={classes.root}>
                        <CardActionArea>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                          
                            <CardContent className={classes.wrapperContent}>
                            <CardMedia
                            className={classes.media}
                            image={imgBanner}
                            title="Contemplative Reptile"
                            />
                            <Typography variant="body2" color="textSecondary" component="p">
                            Cách nhận 1402 MB data 4G miễn phí từ nhà mạng Viettel nhân dịp ngày lễ 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                </Card>
                
                <Card className={classes.root}>
                        <CardActionArea>
                          
                          
                            <CardContent className={classes.wrapperContentBanner}>
                            <CardMedia
                            className={classes.banner1}
                            image={banner1}
                            title="Contemplative Reptile"
                            />
                           
                            </CardContent>
                        </CardActionArea>
                        
                </Card>
                <Card className={classes.root}>
                        <CardActionArea>
                          
                          
                            <CardContent className={classes.wrapperContentBanner}>
                            <CardMedia
                            className={classes.banner1}
                            image={banner1}
                            title="Contemplative Reptile"
                            />
                           
                            </CardContent>
                        </CardActionArea>
                        
                </Card>
                
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(BannerRight)