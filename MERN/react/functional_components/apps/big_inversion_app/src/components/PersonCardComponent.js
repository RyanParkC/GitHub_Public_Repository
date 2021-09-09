/* Create Component and Display on Webpage 
    Inputs are placed in App.js via calling the Component */

import React, { useState } from 'react'

const PersonCardComponent = (props) => {                    // setting component "PersonCardComponent"
    const [count, setCount] = useState(0)                   // setting count = "useState"
    const { firstName, lastName, hairColor, age } = props;  // setting "props"
    const handleClick = () => {                             // setting "handleClick"
        setCount(count + 1)                                 // setCount
    }
    return (            // Displays the following on the Webpage (localhost:3000)
        <div>
            < >
                <h3 >{ lastName }, { firstName }</h3>
                <p >Age: { age + count }</p>
                <p >Hair Color: { hairColor }</p>
                <p>Button Clicked { count } times.</p>
                <button onClick={ handleClick }>Click Me</button>
            </>
        </div>
    )
}

export default PersonCardComponent;     // Export Component