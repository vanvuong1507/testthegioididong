import React, { Component } from 'react'
import {withStyles} from "@material-ui/core"
import styles from "./styles"
 class ViewCart extends Component {
    render() {
        let {classes,title}=this.props;
        return (
        
               <li className={classes.li}>{title}</li>
               
          
        )
    }
}
export default withStyles(styles)(ViewCart)
