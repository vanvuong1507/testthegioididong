import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from "./styles"
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TabletIcon from '@material-ui/icons/Tablet';
import LaptopIcon from '@material-ui/icons/Laptop';
import HeadsetIcon from '@material-ui/icons/Headset';
import WatchIcon from '@material-ui/icons/Watch';
import AirplayIcon from '@material-ui/icons/Airplay';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Route, Link,BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const menus = [
    {
        name: 'ĐIỆN THOẠI',
        to: '/dtdd',
        exact: false,
        icon:()=><PhoneAndroidIcon/>
    },
    {
        name: 'TABLET',
        to: '/may-tinh-bang',
        exact: false,
        icon:()=><TabletIcon/>
    },
    {
        name: 'LAPTOP',
        to: '/laptop',
        exact: false,
        icon:()=><LaptopIcon/>
    },
    {
        name: 'PHỤ KIỆN',
        to: '/phu-kien',
        exact: false,
        icon:()=><HeadsetIcon/>
    },
    {
        name: 'ĐỒNG HỒ ',
        to: '/dong-ho',
        exact: false,
        icon:()=><WatchIcon/>
    },
    {
        name: 'CŨ GIÁ RẺ',
        to: '/may-doi-tra',
        exact: false,
        icon:()=><AirplayIcon/>
    },
    {
        name: 'CÔNG NGHỆ',
        to: '/tin-tuc',
        exact: false,
        icon:()=><FilterDramaIcon/>
    },
    {
        name: 'HỎI ĐÁP',
        to: '/hoi-dap',
        exact: false,
        icon:()=><QuestionAnswerIcon/>
    }
];
const useStyles = makeStyles(() => ({
    test:{
        color:"black"
    },
    textCenter:{
        "text-align":"center"
       },
    h5:{
        margin: 0,
        "font-weight": 500
       },
    textDecoration:{
        "text-decoration": "none",
        color:"#000"
       }
     
    
    
  }));
const MenuLink = ({ label, to, activeOnlyWhenExact,icon }) => {
  let classes =useStyles()

    return (

        <Route
            path={to}
            exact={activeOnlyWhenExact}
            icon={icon}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active} >
                        <Link to={to} className={classes.textDecoration}>
                <div className={classes.textCenter} >{icon}</div>
                        <h5 className={classes.h5}> {label}</h5>
                           
                        </Link>
                    </li>
                );
            }}
        />
    );
};
 class MainMenu extends Component {
    render() {
        var {classes}=this.props;
        return (
            <nav>
                <ul className={classes.wrapperNav}>
                         {this.showMenus(menus)}
                    
                </ul>
            </nav>
        )
    }
    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                console.log(menu.icon);
                return (

                   
                    <MenuLink 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        icon={menu.icon()}
                    />
                    
                );
            });
        }
        return result;
    }
}


export default withStyles(styles)(MainMenu)