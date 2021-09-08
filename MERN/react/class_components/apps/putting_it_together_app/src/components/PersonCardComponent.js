import React, { useState } from 'react'

const PersonCardComponent = (props) => {
    const [count, setCount] = useState(0)
    const { firstName, lastName, hairColor, age } = props;
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            < >
                <h3 >{ lastName }, { firstName }</h3>
                <p >Age: { age + count }</p>
                <p >Hair Color: { hairColor }</p>
                <p>Button Clicked { count } times.</p>
                <button onClick={handleClick}>Click Me</button>
            </>
        </div>
    )
}

export default PersonCardComponent;