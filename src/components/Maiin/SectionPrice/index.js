import React, { Component } from 'react'
import {withStyles} from "@material-ui/core"
import styles from "./styles"
import Slider from "react-slick";
import PriceItem from './PriceItem/PriceItem';
import ViewCart from './ViewCart/ViewCart';
import imgItem from './img/samsung.jpg'
const arrDiscount=[
  {
    img:imgItem,
    name:"sam sung",
    price:10000,
    avatar:null,
    discription:  "mua kem office 365 giam ngay 300k"
  },
  {
    img:imgItem,
    name:"sam sung",
    price:10000,
    avatar:null,
    discription:  "mua kem office 365 giam ngay 300k"
  }
  ,
  {
    img:imgItem,
    name:"sam sung",
    price:10000,
    avatar:null,
    discription:  "mua kem office 365 giam ngay 300k"
  }
  ,
  {
    img:imgItem,
    name:"sam sung",
    price:10000,
    avatar:null,
    discription:  "mua kem office 365 giam ngay 300k"
  }
  ,
  {
    img:imgItem,
    name:"sam sung",
    price:10000,
    avatar:null,
    discription:  "mua kem office 365 giam ngay 300k"
  }
  ,
  {
    img:imgItem,
    name:"sam sung",
    price:10000,
    avatar:null,
    discription:  "mua kem office 365 giam ngay 300k"
  }
]

class SectionPrice extends Component {
  showItem=(arrDiscount)=>{
    let result=null;
    if(arrDiscount.length>0){
      result=arrDiscount.map((item,index)=>{

     
        return  (<PriceItem
                key={index}
                number={index}
                img={item.img}
                name={item.name}
                price={item.price}
                avatar={item.avatar}
                discription={item.discription}
               />)
     
      })
    }
   
    return result;
  }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow:5,
            slidesToScroll: 3
          };
          let {classes}=this.props;
          console.log(arrDiscount);
        return (
         <div className={classes.wrapper2} >

        <div className={classes.wrapper}>
          <h2 className={classes.wrapper1}><span>22</span><span> </span>điện thoại khuyến mãi</h2>
          <div className={classes.ul}>
          
          </div>
         
        </div>
             
       
        <Slider {...settings} >
        {this.showItem(arrDiscount)}
        </Slider>
        </div>
          
        )
    }
    

 
}

export default  withStyles(styles)(SectionPrice)