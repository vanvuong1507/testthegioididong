import React, { Component } from 'react'

import {withStyles} from "@material-ui/core"
import styles from './styles'
import Main from '../../components/Maiin'
 class HomePage extends Component {
    render() {
        return (
            <div>
              <Main/>
            </div>
        )
    }
}



export default withStyles(styles)(HomePage);