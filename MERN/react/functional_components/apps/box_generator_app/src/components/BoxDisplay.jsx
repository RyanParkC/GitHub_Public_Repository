import React from 'react'
import Box from './Box'

const BoxDisplay = ( props ) => {
    const { boxStyles } = props
    console.log( boxStyles );
    return (
        <div className="grid">
            {
                boxStyles.map(( style, i ) => <Box key={ i } style={ style } />)
            }
        </div>
    )
}

export default BoxDisplay