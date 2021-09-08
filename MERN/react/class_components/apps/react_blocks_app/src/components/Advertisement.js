import React, { Component } from 'react'
import styles from './Advertisement.module.css'

class Advertisement extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div className={ styles.advertisement }>
                <h3>Advertisement (Purple) Box</h3>
            </div>
        );
    }
}

export default Advertisement