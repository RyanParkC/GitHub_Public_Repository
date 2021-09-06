/* JSX && Babel */

/* Syntactic sugar =
    Syntax within a programming language that is designed to make things EASIER TO READ or to express.
    It makes the language "sweeter" for human use:
        Things can be expressed more clearly, more concisely, 
        or in an alternative style that some may prefer. */

// JSX provides syntactic sugar for the function:
React.createElement(component, props, ...children)

/* Using React.createElement, we sacrifice the easy-to-read HTML syntax.
    Pros(+) = JSX (JavaScript Syntax Extension) was designed to provide us with some syntactic sugar.
    Cons(-) = JSX isn't a language we can just start typing and expect things to work properly.
                Browsers CAN'T just interpret the JSX language out of the box.
                If we tried to run JSX code right now then we would just see:
                    Uncaught SyntaxError: Unexpected token
    In order to make JSX work, we need to use a transpiler named:
        Babel

/* Enter Babel
    Babel = a transpiler that will turn JSX into JavaScript that browsers can understand.
    We can add Babel into our page by using a simple <script> tag: */
    <script type="text/babel">
    ReactDOM.render(<App />, document.getElementById('root'));
    </script>

// Difference between JSX and JavaScript -------------------------------------------------------------

/* Raw JavaScript */ (React.createElement) 
    const App = () => {
        // Here we simply created a function that returns a new React element
        return React.createElement("h1", {}, "Our First React page has rendered");
    }
    /* 
    *  SIDE NOTE:
    *  Because the function above returns 1 thing, we can re-write this function in 1 line:
    *  const App = () => React.createElement("h1", {}, "Our First React page has rendered");
    */
    // Then we call the function that returns the element that we intend to render.
    ReactDOM.render(App(), document.getElementById("root"));
    // Though, take a mental note on how we are firing the App function just like any other function


/* JSX --> Babel --> JavaScript */
    // Notice the HTML syntax here. Although this may look like regular HTML, it's actually not. 
    ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));
    // **Here is what the Babel translation looks like**
    ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById("root"));

/* Enter JSX
    JSX = an optional syntax that is simply just syntactic sugar to make it so that:
        a) We can bring back the regular html syntax
        b) We don't have to type React.createElement() all the time
        c) Ultimately reduce the amount of code we write
    
    Using JSX does NOT mean that anything is different.
    We are still creating React Functional components but, with JSX, it looks NICER. */

    const App = () => <h1>Our First React page has rendered</h1>;
    // Notice The difference in syntax. Here we've created a React Functional Component, named App which looks 
    // like regular HTML syntax
    ReactDOM.render(<App></App>, document.getElementById("root"));
    // Instead of the traditional way we are familiar with firing a function - App() -
    // we wrap our function name in an HTML tag instead - <App /> -

    /* In the */ ReactDOM.render() /* method,
        You can tell the DIFFERENCE between a normal HTML element vs. a React Component by:
            The FIRST (1st) letter in our component name is UPPERCASE
        Note:
            React treats Lowercase letters as DOM tags.
            i.e. if our App function name started with Lowercase (i.e. const app = () => {...}),
            React would assume that you are trying to use a native html tag named 'app'
            but, because 'app' is NOT a valid html tag, it will throw the following error:
                Warning: The tag app; is unrecognized in this browser. 
                If you meant to render a React component, start its name with an UPPERCASE letter.
        We also have the ability to SELF close our JSX tags.
            In contrast to regular HTML,
            self-closing elements such as 'hr' must be explicitly closed in order for the JSX to be valid.
            e.g. the existing HTML <input /> tag is a self-closing tag. */

// Lets look at a normal HTML input tag that is self closed. 
<input .... /> // html tag
// With JSX, we can do the same thing. 
// So, because our <App></App> tag doesn't wrap anything, we can self close it. 
<script type="text/babel">
    ReactDOM.render(<App />, document.getElementById('root'));
</script>

// Just like that, you get to write HTML-like code in JavaScript, and then, in the end,
// Babel compiles that JSX down to React.createElement() calls

/* IMPORTANT **************************************************
    When we create a project via create-react-app, we are INSTALLING React.
        Within our React files, when we write "import React from 'react'",
        we can write in JSX within that file without needing to add any extra dependencies. */

// Additional Resources:
https://reactjs.org/docs/introducing-jsx.html
https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.5&externalPlugins=&assumptions=%7B%7D
