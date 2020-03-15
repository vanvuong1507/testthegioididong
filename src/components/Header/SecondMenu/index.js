import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from "./styles"
 class SecondMenu extends Component {
    render() {
        var {classes}=this.props;
        return (
            <nav>
            <ul className={classes.wrapperNav}>
                <a className={classes.borderLeft}>
                    
                    <span>Sim số thẻ cào</span>
                  
                    
                </a>
                <a  className={classes.borderLeft}>
                    
                    <span>Đóng tiền điện nước trả góp</span>
                </a>
               
              
            </ul>
        </nav>
        )
    }
}


export default withStyles(styles)(SecondMenu)