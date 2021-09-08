import React, { Component } from 'react' 
import styles from './Navigation.module.css'

class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div className={ styles.nav }>
                <h3>Navigation (Blue) Box</h3>
            </div>
        );
    }
}

export default Navigation