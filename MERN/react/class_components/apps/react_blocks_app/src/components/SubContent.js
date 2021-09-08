import React, { Component } from 'react'
import styles from './SubContent.module.css'

class SubContent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div className={ styles.subGrid }>
                <h3>Sub Content (Yellow) Box</h3>
            </div>
        );
    }
}

export default SubContent