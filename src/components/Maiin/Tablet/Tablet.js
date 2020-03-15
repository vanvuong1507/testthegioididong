import React, { Component } from 'react'
import {withStyles} from '@material-ui/core'
import styles from './styles'
import Grid from '@material-ui/core/Grid';
import ViewCart from '../SectionPrice/ViewCart/ViewCart';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import samSung from './img/samsung.jpg'
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import oppo from './img/oppo.jpg'
import ItemProduct from '../../ItemProduct/ItemProduct';
const arrTitle=[
    "điện thoại đôc quyền","iphone 11 pro max","iphone 11","điện hoai sam sung","galaxy note 10","xem tât cả 166 dien thoai"
]
const arrDiscount=[
    {
      img:oppo,
      name:"sam sung",
      price:10000,
      avatar:null,
      discription:  "mua kem office 365 giam ngay 300k"
    },
    {
      img:oppo,
      name:"sam sung",
      price:10000,
      avatar:null,
      discription:  "mua kem office 365 giam ngay 300k"
    }
    ,
    {
      img:oppo,
      name:"sam sung",
      price:10000,
      avatar:null,
      discription:  "mua kem office 365 giam ngay 300k"
    }
  
  ]

 class Tablet extends Component {
     showView=(arr)=>{
         let result=null;
         if(arr.length>0){
             result=arr.map((item,index)=>{
                 return (
                     <ViewCart
                     key={index}
                     title={item}
                     />
                 )
             })
         }
         return result;
     }
     showItem=(arrDiscount)=>{
        let result=null;
        if(arrDiscount.length>0){
          result=arrDiscount.map((item,index)=>{
    
         
            return  (<Grid item xs={4}>
                    <ItemProduct
                    key={index}
                    number={index}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    avatar={item.avatar}
                    discription={item.discription}
                   />
            </Grid>
            
                   )
         
          })
        }
       
        return result;
      }
    render() {
        let {classes}=this.props;
        return (
            <div className={classes.wrapper3}>
                 <div className={classes.wrapper}>
                <h2 className={classes.wrapper1}><span></span><span> </span>Tablet nổi bật nhất</h2>
                <div className={classes.ul}>
                <ul className={classes.ul1}>
                    {this.showView(arrTitle)}
                    </ul>
                   
                </div>
                </div>
               <Grid container spacing={0}>
                    <Grid item xs={5} >

                            <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={samSung}
                                title="Contemplative Reptile"
                                />
                                <CardContent className={classes.paddingContent}>
                                    <Box display="flex" justifyContent="space-between" >
                                    <Typography gutterBottom variant="h5" component="h2">
                                    sam sung galaxy A51
                                </Typography>
                                <Chip label="tra gop 0%" color="secondary" />

                                    </Box>
                            
                                <Typography variant="body2"  align="left" color="textSecondary" component="p">
                                7.999.999
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            
                            </Card>

                            
                    </Grid>
                    <Grid item xs={7} >
                            <Grid container spacing={0}>
                            {this.showItem(arrDiscount)}
                            </Grid>
                    </Grid>
                   
               </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Tablet)