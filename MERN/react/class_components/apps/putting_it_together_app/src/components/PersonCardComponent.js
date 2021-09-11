import React, { useState } from 'react'

const PersonCardComponent = (props) => {
    const [count, setCount] = useState(0)
    const { firstName, lastName, hairColor, age } = props;
    const increaseClick = () => {
        setCount(count + 1)
    }
    const decreaseClick = () => {
        setCount(count - 1)
    }
    return (
        <div>
            < >
                <h3 >{ lastName }, { firstName }</h3>
                <p >Age: { age + count }</p>
                <p >Hair Color: { hairColor }</p>
                <p>Counter { count } times</p>
                <button onClick={ increaseClick }>Increase</button>
                <button onClick={ decreaseClick }>Decrease</button>
            </>
        </div>
    )
}

export default PersonCardComponent;