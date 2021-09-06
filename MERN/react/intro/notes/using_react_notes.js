// React Notes

/* What is React?
    A JavaScript library for building user interfaces.

    It is the code that runs on our user's browser, displaying info we want them to see,
    reacting to user input, being responsible for not just the look and feel of our web app,
    but most of its interactivity as well. */

/* Where does React come from?
    Open-source project maintained by Facebook */

/* Why should we learn React?
    1. Can be used to build a single page application (SPA), which will make our website feel
        more responsve by eliminating page loads for our users.
    2. Doesn't matter what technology we use with it, we can choose the libraries we use for:
        http requests, front-end routing, styling, etc.
    3. Doesn't prevent us from using DOM manipulation already built into JS.
    4. Very popular. Most loved web framework by its developers. */

// Using React ------------------------------------------------------------------------------

/* How does it work?
    Works by using objects called 'components'.
    These components can be created in a variety of ways, but general idea is to:
        Break down your DOM into a variety of componenets that have specific behaviors.
            e.g. If we have a form on our page, we may create a component just for that form.
                Then, we can have a separate component just for the navbar and so on... */

/* If we want to use React within our HTML, we must include the React scripts in our HTML: */
<script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 

/* Then, we can make a basic component using React.createElement 
    3 Main Parameters:
        1. h1 tag -- what kind of element we want to create
        2. {} -- discuss concept later. for now, pass in an empty objet
        3. "" -- children of element (e.g. h1 tag children = "string") */
const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")

// For a nested React Component
const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))



