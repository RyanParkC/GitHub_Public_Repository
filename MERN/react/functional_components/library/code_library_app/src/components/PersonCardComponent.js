import React, { useState } from 'react';

// Displays on webpage -- input in App.js
const PersonCard = props => {
    // setting variables = props so can call them without having to use:
    // 'props.lastName' can just call with 'lastName'
    const { firstName, lastName, hairColor, age } = props;
    // defined two variables (state, setState) by calling "useState" hook method
    const [count, setCount] = useState(0);

    // function increase/decreaseClick () -- increases setCount with each button click
    const increaseClick = () => {
        setCount(count + 1);
    }
    const decreaseClick = () => {
        setCount(count - 1);
    }
    return(
        <div className="mt-5">
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { age + count }</p>
            <p>Hair Color: { hairColor }</p>
            {/* Display count */}
            Clicked: { count } times
            {/* onClick Button calls function handleClick upon click */}
            <button className="mx-3" onClick={ increaseClick }>Increase Button from PCC.js</button>
            <button onClick={ decreaseClick }>Decrease Button from PCC.js</button>
        </div>
    );
}
export default PersonCard;

