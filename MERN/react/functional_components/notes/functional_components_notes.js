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




