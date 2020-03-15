import React, { Component } from 'react'
import {withStyles} from "@material-ui/core"
import styles from "./styles"
import Slider from "react-slick";
import PriceItem from './PriceItem/PriceItem';
import ViewCart from './ViewCart/ViewCart';
import imgItem from './img/samsung.jpg'
const arrTitle=[
  "điện thoại đôc quyền","iphone 11 pro max","iphone 11","điện hoai sam sung","galaxy note 10","xem tât cả 166 dien thoai"
]
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

class DongHo extends Component {
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
          <h2 className={classes.wrapper1}><span></span><span> </span>Dong Ho hang</h2>
          
          <div className={classes.ul}>
                <ul className={classes.ul1}>
                    {this.showView(arrTitle)}
                    </ul>
                   
                </div>
     
         
        </div>
             
       
        <Slider {...settings} >
        {this.showItem(arrDiscount)}
        </Slider>
        </div>
          
        )
    }
    

 
}

export default  withStyles(styles)(DongHo)