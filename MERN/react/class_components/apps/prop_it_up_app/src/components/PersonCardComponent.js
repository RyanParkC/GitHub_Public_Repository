import React, { Component } from 'react';
    
// using Class Component ------------------------------------------------------------------------

// Format #1 (Class Component) --------------------------------------------------
class PersonCardComponent extends Component {
    render() {
        return (
            <div>
                {/* By inheriting from React.Component all we need is the "this" keyword in front of props */}
                <h3>{ this.props.lastName }, { this.props.firstName }</h3>
                <p>Age: { this.props.age }</p>
                <p>Hair Color: { this.props.hairColor }</p>
            </div>
        )
    }
}

export default PersonCardComponent;

// Format #2 (CLass Component) --------------------------------------------------

// class PersonCardComponent extends React.Component {
//     render() {
//         const { firstName, lastName, age, hairColor } = this.props;
//         return (
//             <div>
//                 {/* Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar */}
//                 <h3>{ lastName }, { firstName }</h3>
//                 <p>Age: { age }</p>
//                 <p>Hair Color: { hairColor }</p>
//             </div>
//         )
//     }
// }

// using Functional Component -------------------------------------------------------------------

// const PersonCardComponent = (props) => {
//     const { firstName, lastName, age, hairColor } = props; // setting constants = props (input)
//     return (
//         <div>
//             <>
//                 <h3>{ lastName }, { firstName }</h3>
//                 <p>Age: { age }</p>
//                 <p>Hair Color: { hairColor }</p>
//             </>
//         </div>
//     )
// }


// Notes -----------------------------------------------------------------------------------------

// class SomeClassComponent extends Component {
//     render() {
//         return <div>This is our first class component.</div>;
//     }
// }
    
// export default SomeClassComponent;


// Class Component
// When creating a Class Component there are a couple things we have to do in order for it to be a valid component. Each class must:

// Have a name starting with a capital letter.
// Extend React.Component.
// Have a render() method that returns a React Element either by JSX or React.createElement(). Below, we are using JSX.

// Props

// Props, short for properties, is an empty object that is passed to every React component by default. 
// To pass props down to our child components, we simply need to add an html attribute to our component. 
// Each attribute will become a key in the props object and each value given to that attribute will become the value of that key.

// To access props in a class component, we will need to precede the props with the keyword this. 
// Because our class components extend React.Component, we already have access to the props variable that React has defined in the Component class.