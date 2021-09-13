import React, { useState } from 'react';
    
    
const Counter = props => {
    // defined two variables (state, setState) by calling "useState" hook method
    const [count, setCount] = useState(0);

    // function handleClick () -- increases setCount with each button click
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="my-3">
            {/* Display count */}
            Clicked: { count } times
            {/* onClick Button calls function handleClick upon click */}
            <button className="mx-3" onClick={ handleClick }> Increase Button from CounterComponent.js</button>
        </div>
    );
}
    
export default Counter;


/* Class Component --------------------------------------------------------- */

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             clickCount: 0
//         }
//     }

//     handleClick = () => this.setState({
//         clickCount: this.state.clickCount + 1
//     })
    
//     render() {
//         return (
//             <div>
//                 { this.state.clickCount }
//                 <button onClick={ this.handleClick }>Click Me</button>
//             </div>
//         );
//     }
// }
    
// export default Counter;

