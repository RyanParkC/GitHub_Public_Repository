import React, { Component } from 'react'
import styles from './Main.module.css'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        const { children } = this.props;
        return(
            <div className={ styles.main }>
                { children }
            </div>
        );
    }
}
export default Main