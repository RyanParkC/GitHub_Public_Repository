/* Functional vs Class Components Notes 

    Using React, we can build Components as either 'classes' or 'functions'.
        Historically, 'class' components have been the way to go.
            Class components = more robust, had ability to handle things such as "state".
                                had "state" as an attribute.
            Functional components = did not have "state" directly tied to them,
                                        but now we can via "hooks"
    
    With the creation of "hooks", 
        we can now access Component "state" in a Functional component.
            Thus, Functional components have slowly been overtaking Class components.
            Most new React code will likely use Functional components.
    The React team has stated they are still going to support Class components.
        Thus, you can mix & match them and the code will still work!
    Going forward, due to increasing relevance of Functional components, we will be using them exclusively.
        However, understanding Class components is extremely important, as hooks are relatively new,
        and many existing codebases will still use Class components. */

/* Functional Components ------------------------------------------------------------------------------- 
    E.g. Writing React Components with Functions */
        import React from 'react';
        const PersonCard = props => {   // here, we use an arrow function that accepts an argument "props"
            return(
                <div>
                    <h1>{ props.lastName }, { props.firstName }</h1>   // access values via "props.valueName"
                    <p>Age: { props.age }</p>
                    <p>Hair Color: { props.hairColor }</p>
                </div>
            );
        }
        export default PersonCard;

    // We can render the Component like this:
        <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
            //Note: we can pass down a string with or without curly braces.

/* useState ---------------------------------------------------------------------------------------------
    Hooks = *** EXTREMELY IMPORTANT part of React ****
    
    Hook = A function, either built-in or custom, 
            that allows you to "hook" in or use a certain piece of functionality.
    
    e.g. of "Class" Components */
        import React, { Component } from 'react';
            
            
        class Counter extends Component {
            constructor(props) {
                super(props);
                this.state = {                          // we have access to "this.state"
                    clickCount: 0
                }
            }
        
            handleClick = () => this.setState({         // and can change it via "setState"
                clickCount: this.state.clickCount + 1
            })
            
            render() {
                return (
                    <div>
                        { this.state.clickCount }
                        <button onClick={ this.handleClick }>Click Me</button>
                    </div>
                );
            }
        }
            
        export default Counter;

/* Using useState 
    However, in Functional component, we do NOT have such abilities.
        Thus, we need "hooks" 
            With "Hooks", we can define and set the "state" of a Functional Component.
    To use useState, we must import: */
        import React, { useState } from 'react';

    /* The hook, "useState" will be imported from "react".
        Next, let's convert that "Class" Component to a Functional Component. */
            import React, { useState } from 'react';
                
                
            const Counter = props => {
                const [state, setState] = useState({
                    clickCount: 0
                });
                
                return(
                    <div>{ state.clickCount }</div>
                );
            }
                
            export default Counter;

/* We have just two (2) variables:
        "state" and "setState" --> by calling the "useState" method.
            They will behave the same way that "state" behaves in a "Class" Component.
                We can ACCESS the current state via "state" 
                and then CHANGE the state via "setState"
    
    e.g. setting "state" */
        import React, { useState } from 'react';
        
        
        const Counter = props => {                      // constant "Counter" = props (properties)
            const [state, setState] = useState({        // constant = [state, setState] = useState
                clickCount: 0                           // state = clickCount = 0
            });
        
            const handleClick = () => {
                setState({                              // setState = state.clickCount + 1
                    clickCount: state.clickCount + 1    
                });
            }
        
            return (                                    // onClick "button" to click counter + 1
                <div>
                    { state.clickCount }
                    <button onClick={ handleClick }>Click Me</button>  
                </div>
            );      // Whenever we click the button, we are preventing the default behavior and then
        }           // seting the state by incrementing the clickCount property.
                    // Now, we can use "state" within a Functional Component.
        
        export default Counter;
    
/* Note:
    When invoking "useState", we do NOT need to pass in an Object.
    We can just pass in a primitive value and then update it accordingly.
    
    You will more commonly see useState implemented as in the following example:

    e.g. useState implemented */
        import React, { useState } from 'react';
        
        
        const Counter = props => {                      // constant "Counter" = props (properties)
            const [count, setCount] = useState(0);      // constant [count, setCount] = useState(0)
        
            const handleClick = () => {                 // constant "handleClick" = () = setCount
                setCount(count + 1);                    // setting counter + 1 for click
            }
        
            return (                                    // onClick "button" to click counter + 1 
                <div>
                    { count }
                    <button onClick={ handleClick }>Click Me</button>
                </div>
            );
        }
            
        export default Counter;

/* Forms Notes ------------------------------------------------------------------------------------------
    Forms = allow us to have a conversation with our users.
        Two (2) ways to deal with forms in React:
            1. state = Track input values as a piece of your state, updating them on change events
                        and rendering them back out to the UI.
                        These are called 'Controlled components'.
            2. refs = Attach a pointer to DOM nodes like inputs and textareas and reach out to inspect
                        their values once our form is submitted. We call these 'Uncontrolled components'.
        We'll favor the 'Controlled component' strategy because it allows React to continue to sit
        between us and the actual DOM.
    
    e.g. UserForm.jsx */
    import React, { useState } from  'react';
    
    
    const UserForm = (props) => {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");  
        
        const createUser = (e) => {
            e.preventDefault();
            const newUser = { username, email, password };
            console.log("Welcome", newUser);
        };
        
        return(
            /* onSubmit = event runs when user submits form by clicking on submit button.
                Needs to accept a parameter (e) that is full of event info.
                Here, we want to prevent the default form behavior using 'e.preventDefault()'.
                The default behavior is submitting the info to the route in the 'action' which
                causes a page load. We want to handle this info ourselves. 
                
                createUser = when onSubmit event occurs, we have written a function that handles 
                what to do with the form data. */
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    {/* onChange = this event is run whenever the value in the input is changed
                        When we use it we need to accept a parameter (e) into our function.
                        'e' variable contains all sorts of nifty event info,
                        where 'e.target' is the 'target' of the event, in other words the <input />
                        element, and 'e.target.value' is the info currently typed into the input. */}
                    <input type="text" onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
        );
    };
        
    export default UserForm;
    



