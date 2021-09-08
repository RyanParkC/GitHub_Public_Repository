/* Class Components Notes */

/* Components = are like JavaScript functions.
    They accept arbitrary inputs (called "props") and return React elements describing
    what should appear on the screen.

    React component = a function that returns a React Element. */

/* Class Component -------------------------------------------------------------------------
    When creating a Class Component, each class MUST:
        1. Have a name STARTING with a CAPITAL LETTER.
        2. EXTEND React.Component
        3. Have a render() method that returns a React Element 
            either by JSX or React.createElement(). Below, we are using JSX. */

    // SomeClassComponent.js
        import React, { Component } from 'react';
        
        class SomeClassComponent extends Component {   // Extend React.Component
            render() {                                 // render() method
                return <div>This is our first class component.</div>
            }
        }
        
        export default SomeClassComponent;



/* Props (Properties) Notes ----------------------------------------------------------------- */

/* Props (properties) = an EMPTY OBJECT that is passed to EVERY React component BY DEFAULT.

    To PASS props down to our CHILD components, 
        we simply need to add an html attribute to our component. 
        Each 'attribute' will become a 'key' in the props object and 
        each value given to that 'attribute' will become the 'value' of that 'key'.

    To ACCESS props in a class component, 
        we will need to precede the props with keyword 'this'.
        Because our class components extend React.Component, 
        we already have access to the props variable that 
        React has defined in the Component class. */

    // By inheriting from React.Component, all we need is the "this" keyword in front of props.
    class Header extends React.Component {      // inherit Component class from React
        render() {                              // render method
            return (
                <div>

                    <h1>My name is { this.props.firstName } { this.props.lastName }</h1>

                </div>
            )
        }
    }
        // A class component needs two (2) things:
            // A render method and must inherit the Component class from React

    // We could also destructure our class props this way:
        // Destructuring allows us to use them like variables.
        // This is just a small amount of syntactical sugar.
    class Header extends React.Component {
        render() {

            const { firstName, lastName } = this.props;

            return (
                <div>

                    <h1>My name is { firstName } { lastName }</h1>

                </div>
            )
        }
    }

/* Flow of Data -
    Because the data flow in React flows DOWNWARD,
    we use props all the time to pass data down from component to component.

    We are NOT limited in the amount of stuff we can pass down in props.
    We can pass down anything we want including FUNCTIONS.

    A Note on Curly Braces:
        In JSX, we use:
            curly braces {} to denote a JavaScript expression.
        Typically, you can only send down STRINGS in PROPS.
        However, with curly braces {},
            We can send JavaScript expressions (assuming they are valid).
                This includes numbers, strings, functions, objects, etc.
    
    Valid ways to pass down props: */

        // Valid. We can send normal strings, butin numbers need curly braces
        <SomeComponent someProp="test" someOtherProp={ 67 }/> // Valid

        // Valid. A String is still a JavaScript expression
        <SomeComponent someProp={ "test" } someOtherProp={ 67 }/> // Valid

        // INVALID. Numbers NEED curly braces
        // <SomeComponent someProp="test" someOtherProp=67/> // INVALID!

    // Note: 
        // ** When in doubt, use curly braces {}


/* Children Notes --------------------------------------------------------------------------- */ 

/* Components can also have Children.
    Children of components = element(s)/component(s) that are 
    within the two (2) "tags" of JSX elements. 
    
    We can wrap content with JSX and then nest children. */

// App.js
import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';


function App() {
    return (
        <div className="App">                           // JSX tag
            <MyNewComponent header={ "Header Prop" }>   // prop called "header" we can access
                                                        // within our Component.js
                <p>This is a child</p>                  // Children
                <p>This is another child</p>            // 
                <p>This is even another child</p>       // 
                                                        
            </MyNewComponent>  
        </div>
    );
}

export default App;

// MyNewComponent.js
import React, { Component } from 'react';
    
    
class MyNewComponent extends Component{         // Component called "MyNewComponent"
    render(){
        return(
            <div>                               
                <h1>                            
                    { this.props.header }       // access prop "header" from App.js
                </h1>                          
                { this.props.children }         // access prop "children" from App.js
            </div>
        );
    }
}
    
export default MyNewComponent;


/* Synthetic Events Notes ------------------------------------------------------------------- */

/* React uses a custom approach to adding Event Listeners to our elements by wrapping the 
    browser's native elements and applying its own event system called "Synthetic Events".
    
    There are a few key things to keep in mind about Reacts synthetic event system:
        - The event names are instead camelCased vs. lowercase (i.e. "onclick" becomes "onClick")
            camelCased = writing with no spaces and an initial lowercase or Uppercase letter,
                with each remaining word element beginning with an Uppercase letter.
        - Returning false will NOT work with any event to prevent bubbling.
            You will need to manually call:
                event.stopPropagation() or event.preventDefault() as necessary
        - Events cannot be called asynchronously because of how React "pools" the Synthetic events
    
    So how do we add events to our app?
        The simplest event we can choose is the user clicking on something (a button) in our app */
        
        // Button Click
        // Button will now react to being clicked by alerting that "This button has been clicked!".
        import React from 'react';
        import logo from './logo.svg';
        import './App.css';
            
            
        function App() {
            return ( 
                <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
            );
        }
            
        export default App;
        
    // List of Event Clickers we will use:
        <button onClick={ () => }>Text</button>
        <button onChange={ () => }>Text</button>    // an event that runs when a form input is changed
        <button onSubmit={ () => }>Text</button>    // runs when a form is submitted
        <button onFocus={ () => }>Text</button>     // runs when an element is given focus (clicked on or tabbed to)
        <button onBlur={ () => }>Text</button>      // runs when a form loses element focus (the user clicked away)

// Additional Resources:
https://reactjs.org/docs/events.html#supported-events
https://reactjs.org/docs/handling-events.html


/* State Notes ----------------------------------------------------------------------------------------- */

/* State vs. Props:
    State = allows for a dynamic, changeable data flow
    Props = "read-only"

/* So far, React Components have been displaying info,
        much of which has to be given to them through "props".
        
            "Props" = give info to React Components to be displayed
        
    As we make more complicated React apps some of the components we write will 
        need to be able to store their own info.
    
    The way Components in React are able to hold onto their own info is 
        inside of a variable we will be calling "state".
        
            "State" = a variable that stores info for React Components.
    
    e.g. Example - we may have a "state" for modeling a light switch.
        A light switch has some sort of mechanism we can flip from "On" to "Off".
        
        Whether the switch is in the "On" position or the "Off" position is something we
        could call the "state" of the light switch.
        
            "State" of the light switch = "On" or "Off" position
        
        We can model this using a React Component like the following: */

        import React, { Component } from 'react';
                        
                        
        class LightSwitch extends Component {
            constructor(props) {    // constructor allows us to create an attribute for our LightSwitch Component
                super(props);
                this.state = {      // attribute ("state") we created for our component LightSwitch
                    position: "On"  // key "position" : value "On" or "Off"
                };
            }
            
            render() {              // render() method - display current state of light switch
                return (
                    <fieldset>
                        <p>The light is currently { this.state.position }</p>
                        <button>Flip Switch</button>            // this button does nothing yet
                    </fieldset>
                );
            }
        }
                        
        export default LightSwitch;

/* setState ----------------------------------------------------------------------------------- */

/* Button - setup for 2 way ("On", "Off") */
    // Button Tag
        <button onClick={ this.flipSwitch }>Flip Switch</button>
    // Button Method - goes inside of LightSwitch Component
        flipSwitch = () => {
            if( this.state.position === "On" ) {
                this.setState({ position: "Off" });
            } else {
                this.setState({ position: "On" });
            }
        }
    // Summary (combined) -
        import React, { Component } from 'react';
                        
                        
        class LightSwitch extends Component {
            constructor(props) {    // constructor allows us to create an attribute for our LightSwitch Component
                super(props);
                this.state = {      // attribute ("state") we created for our component LightSwitch
                    position: "On"  // key "position" : value "On" or "Off"
                };
            }

            flipSwitch = () => {
                if( this.state.position === "On" ) {
                    this.setState({ position: "Off" });
                } else {
                    this.setState({ position: "On" });
                }
            }

            render() {              // render() method - display current state of light switch
                return (
                    <fieldset>
                        <p>The light is currently { this.state.position }</p>
                        <button onClick={ this.flipSwitch }>Flip Switch</button>
                    </fieldset>
                );
            }
        }
                        
        export default LightSwitch;

// Additional Resources:
https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
https://reactjs.org/docs/react-component.html#setstate

/* Lifecycle Methods Notes ------------------------------------------------------------------- */

/* Using class components gives us easy access to React's lifecycle methods.

    Lifecycle Methods -
        Methods we use to access the Component Lifecycles.

    A Component Lifecycle -
        Every component, whether functional or class, has a cycle it goes through
        from the point it is created and mounted to the point it is destroyed and unmounted.
        
        Each stage has methods that run in a particular order.
        
        Four (4) Stages of a Component's Lifestyle -
            1. Mounting -
                - Here, React is creating and inserting the component into the DOM.
                a. constructor()
                    i. Here, assign "state" to the component and bind "event" handlers.
                        React will then set the default and initial values for both the
                        component's properties (props) and the component's state.
                    ii. This is the first method called before the component is actually
                        mounted to the DOM.
                    iii. NOTE: this is NOT where we would make API calls 
                        or introduce subscriptions.
                b. render()
                    i. This is where the HTML content will be processed and rendered.
                        render = display
                c. componentDidMount()
                    i. This immediately follows the completion of the render() method.
                        This is where we would initiate any kind of:
                            NETWORK REQUEST, SUBSCRIPTION, TIMER, 
                            or if we needed to target a DOM node from the Component tree.
            2. Updating -
                - This stage will RUN EVERY TIME we UPDATE the components state or properties.
                a. shouldComponentUpdate(nextProps,nextState)
                    i. This method gives us the ability to explicitly tell React
                        whether or not the component should be RE-RENDERED after a change in
                        state or props.
                            We use this to OPTIMIZE performance.
                            By default, this method returns TRUE.
                            We could return FALSE if we did NOT want the components to re-render.
                b. render()
                    i. Depending on the RETURN value of shouldComponentUpdate(),
                        this will either RE-RENDER the content or not.
                c. componentDidUpdate(prevProps)
                    i. Whatever the previous method returns becomes the THIRD (3rd) argument
                        for this method which allows us to compare the:
                            prevProps, prevState, and the snapshot value that was just returned.
            3. Unmounting - 
                - Final stage in which React will UNMOUNT the component and REMOVES it from the DOM.
                a. componentWillUnmount()
                    i. This is invoked right BEFORE the component is UNMOUNTED.
                        This is the ideal place to CANCEL any:
                            on-going Network Requests, Subscriptions, or CLEAR Timers.

/* Styles ------------------------------------------------------------------------------------- */

/* There are multiple ways to add styles to a React app:
    1. Direct Import - Simply import a CSS file directly and use its classes.
    2. Inline Styles - Directly pass an object to the style attribute of an HTML element.
    3. CSS Modules - Create-react-app supports CSS Modules by default.
                    No need to make any special adjustments. */

/* 1. Direct Import -----------------------------------------------------------------------
        Directly importing a CSS file and using its classes.
        
        Cons(-) = styles are NOT encapsulated to the Component.
            By importing this styles.css file, if we use the "button" class anywhere else in
            our application, these same styles will be applied, which may NOT be the desired
            outcome.
        
        Note: We use "className" instead of "class" when writing JSX
            "class" is only for JavaScript.
    e.g. */

    // styles.css
    .btn {
        padding: 12px 15px;
        font-family: AbortSignal, sans-ServiceUIFrameContext;
        font-weight: bold;
        background: linear-gradient(30deg, rebeccapurple, magenta);
        color: = #fff;
        border: none;
    }

    // MyButtonComponent.js
    import React, { Component } from 'react';
    import './styles.css';
    
    class MyButton extends Component {
        render() {
            return <button className="btn">{ props.children }</button>;
        }
    }
    
    export default MyButton;

/* Inline Styles ------------------------------------------------------------------------
        Directly pass an object to the style attribute of an HTML element.
        
        Pros(+) = Does a good job of encapsulating the styles to the specific component.
        
        Cons(-) = Media queries CAN'T be used for responsiveness 
            and it does NOT support "pseudo-classes".
        
        Note: Property names which are hyphenated (-) in standard CSS 
            MUST be camelCased when used in objects like this.
            Also, all the values (including integers like 0) must be strings.
    e.g. */
    
    // MyButtonComponent.js
    import React, { Component } from 'react';
        
    const btnStyle = {
        padding: '12px 15px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
        color: '#fff',
        border: 'none'
    };
    
    class MyButton extends Component {
        render() {
            return <button style={ btnStyle }>{ props.children }</button>;
        }
    }
        
    export default MyButton;

/* 3. CSS Modules ----------------------------------------------------------------------------
        Pros(+): Overcomes problems of first two approaches (Direct Import, Inline Styles)
                    a.  Create-react-app supports CSS Modules by default.
                        Thus, we do NOT need to make any special adjustments to use them. 
                Two (2) big advantages of CSS Modules are that:
                    1. You can use media queries in them as usual.
                    2. They are completely encapsulated at the Component level.
        
        Cons(-): Class names CANNOT be hyphenated(-),
                Thus, by convention, camelCasing is used.
        
        Importing the styles gives us an object with all the different classes as key names.

        If you have another component using a different "myButton" class, there is NO conflict
        between them, as class names are given unique hashes at build time to keep them isolated.
        
    e.g. Below, the name of the CSS file needs to end in "module.css" for it to work. */

    // MyButtonComponent.module.css
    .btn {
        padding: 12px 15px; 
        font-family: Arial, sans-serif; 
        font-weight: bold;
        background: linear-gradient(30deg, rebeccapurple, magenta); 
        color: #fff; 
        border: none;
    }

    // MyButtonComponent.js
    import React, { Component } from 'react';
    import styles from './MyButtonComponent.module.css';
    
        
    class MyButton extends Component {
        render() {
            return <button className={ styles.btn }>{ props.children }</button>;
        }
    }
        
    export default MyButton;





