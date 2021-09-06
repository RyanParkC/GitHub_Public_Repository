/* Create React App Notes */

/* Modern JS projects typically use bundlers to "build" source code into production-ready files.
    Webpack = one of the most popular bundlers.
                It is an amazing tool that allows us to breakdown our apps into smaller modules
                and transform them based on tools called "loaders".
                It is definitely a technology worth looking into when you have spare time:
                    https://webpack.js.org/guides/getting-started/
    However, Webpack is not the focus here. We will be focusing on the starter kit:
        create-react-app
            which uses Webpack under the hood. */

/* create-react-app
    To use this starter kit, simply run the follow command in your Terminal: */
        npx create-react-app your-project-name-here 
            // Note: "npx" is NOT a typo! npx comes with npm version 5.2+ and higher
    // Once the project is created, we can simply navigate into the newly-created project folder and run:
        npm start
            /* This will run the React development server and automatically open up a browser tab
            navigated to our app. This starter kit also comes with a live reload feature which will
            reload our app every time we save changes in our code. */
    /* Your <App/> Component will house all of your other components.
        Your other components may then in turn contain other components. 
        But, they all end up being within the <App/> component,
        which gets inserted in the <div> with 'id="root".
        The entire component tree will live within the <App/>. */
        // src/App.js
        function App(){
            return(
                <div className="App">
                    // Other Components live here
                </div>
            )
        }
    /* Create ReactApp will use "ReactDOM" to render your main <App/> component within the <div> 
        with id="root". Once your React app (not to be confused with the <App/> component) is compiled,
        it will be imported in the index.html via <script> tags. All of the changes to the DOM will be 
        within the <div> with id="root" and the final React App will be mounted to that <div> in the DOM.
        // src/index.js */
        ReactDOM.render(<App/>, document.getElementById("root"));
    
        // public/index.html
        <html>
            <head>
            </head>
            <body>
                <div id="root"></div>
            </body>
        </html>

// Additional resources
https://create-react-app.dev/
https://webpack.js.org/guides/getting-started/
https://hacks.mozilla.org/2015/08/es6-in-depth-modules/
https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/
