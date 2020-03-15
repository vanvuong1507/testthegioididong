import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from "./styles"

import Slider from "react-slick";

import imgBanner1 from './img-banner/im1.png'

import imgBanner2 from './img-banner/im2.png'
import imgBanner3 from './img-banner/im3.png'

const dataBanner =[
  {
    img:imgBanner1,
    text:"dat trc san pham rinh qua den 45 trieu dong",
    path:null
  },
  {
    img:imgBanner2,
    text:"dat trc san pham rinh qua den 100 trieu dong",
    path:null
  },
  {
    img:imgBanner3,
    text:"dat trc san pham rinh qua den 1000 trieu dong",
    path:null
  },
  {
    img:imgBanner2,
    text:"dat trc san pham rinh qua den 100 trieu dong",
    path:null
  },
  {
    img:imgBanner3,
    text:"dat trc san pham rinh qua den 1000 trieu dong",
    path:null
  }
]

class BannerLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  
  
  render() {
    var settings = {
     
      infinite: true,
     
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      slidesToScroll: 1,
      adaptiveHeight: true,
      fade:false,
      arrows: true,
     
      className: 'slides'
};
let {classes}=this.props;
let numberArr=dataBanner.length;
const showBanner=()=>{
  let result=null;
  result=dataBanner.map(item=>{
    return (
      <div style={{width:800}}>
            <img src={item.img} />
          </div>
    )
  })
  return result;
  
}

const showText=()=>{
  return(
    dataBanner.map(item=>{
      return (
       <div >
         <p className="slide-text-item">{ item.text}</p>
       </div>
      )
    })
  )
}
    return (
      <div className={classes.wrapper} >
        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth= {true}
          autoplay={true}
         
          
        >
          
        {showBanner()}
        
        </Slider>
       
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={numberArr}
          autoplay={true}
          focusOnSelect={true}
          fade={false}
          arrows={false}
          slidesToScroll={1}
        >
          {showText()}
        </Slider>
      </div>
    );
  }
} 
export default withStyles(styles)(BannerLeft);