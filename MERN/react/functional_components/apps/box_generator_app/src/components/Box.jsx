import React from 'react'

const Box = ( props ) => {
    // creating constant object { style } = argument ( props )
    const { style } = props
    // Here, we return a gridded box with css style = whatever argument we pass
    // through object { style }
    return (
        <div className="grid-item">
            <div className="box" style={ style }></div>
        </div>
    )
}

export default Box