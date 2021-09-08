
import React, { Component } from 'react'

class HeaderComponent extends Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            < >
                <header>
                    <h3>Hello World, My name is { firstName } { lastName }</h3>
                </header>
            </>
        );
    }
}

export default HeaderComponent;