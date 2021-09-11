/* Create Component and Display on Webpage 
    Inputs are placed in App.js via calling the Component */

import React from 'react'

const PersonCardComponent = props => {                    // setting component "PersonCardComponent"
    return (            // Displays the following on the Webpage (localhost:3000)
        <div>
            <>
                <h3 >{ props.lastName }, { props.firstName }</h3>
                <p>Age: { props.age }</p>
                <p>Hair Color: { props.hairColor }</p>
            </>
        </div>
    )
}

export default PersonCardComponent;     // Export Component