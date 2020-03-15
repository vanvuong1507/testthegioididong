import React, { Component } from 'react'
import {withStyles} from "@material-ui/core"
import styles from "./styles"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import oppo from './img/oppo.jpg'
 class ItemProduct extends Component {
    render() {
        let {classes}=this.props;
        let {img,name,number,price,avatar,discription}=this.props;
        const showAvatar=()=>{
          let result=null;
          result=avatar?<Avatar variant="square" className={classes.square}>
          N
      </Avatar> :null;
      return result;
        }
        console.log(avatar)
        return (
            <Card className={classes.root} elevation={0}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={oppo}
                title="Contemplative Reptile"
              />
              <CardContent className={classes.wrapper}>
              <Chip
                size="small"
                icon={<FaceIcon />}
                label="Deletable Secondary"
                className={classes.BadgePrice}
                color="secondary"
              />
                <Typography gutterBottom variant="h5" component="h5">
                  {name}
                </Typography>
                <Typography gutterBottom variant="body" component="p" color="Secondary">
                 {price}
                </Typography>
                <div className={classes.wrapText}>

                {showAvatar()}

              <Typography variant="body2" color="textSecondary" component="p">
                {discription}
                </Typography>
                </div>
              
              </CardContent>
            </CardActionArea>
         
          </Card>
        )
    }
}

export default withStyles(styles)(ItemProduct)