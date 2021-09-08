import React, { Component } from 'react';
import styles from './Header.module.css';
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return(
            <div className={ styles['green-box'] }>
                <h1>Header (Green) Box</h1>
            </div>
        );
    }
}
export default Header