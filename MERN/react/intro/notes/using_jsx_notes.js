/* Composing Pages Using JSX */

/* JSX (JavaScript XML) is an extension that:
    Allows us to write code that closely resembles HTML without having to make it a string.
        This is the preferred way to use React.
    e.g. */
    class App extends Component {       // react component called "App"
        render() {                      // method "render()"
            return (
                <h1>Hello World</h1>    // return what appears to be an HTML <h1> tag
            );
        }
    }
    /* Notice how above we make a react component called "App" 
        and give it a method called "render(){ ... }".
        This method returns what appears to be an HTML <h1> tag.
        Whatever content we wish to make visible on the page, we can write it using a syntax
        we are already familiar with.

        We are able to use any HTML tags we are already familiar with, try out some like: */
        <table></table>
        <ul></ul>
        <form></form>
        <input></input>
        <img></img>

/* Some Rules to keep in mind -
    We CAN'T just put in ANYTHING we want to.
    
    **** JSX Expressions MUST have ONE Parent Element ****
    e.g. FAIL example */
    class App extends Component {
        render() {
            return (                   // Error occurs - need enclosing tag around JSX elements

                <h1>Hello World</h1>
                <p>This is a paragraph</p>

            );
        }
    }
    // Leads to ERROR message:
        ./src/App.js
            Line 6: Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. 
            Did you want a JSX fragment <>...</>?
    
    // CORRECT format:
        /* We can either place the elements inside of a single tag like <div>...</div>
        OR if we don't want to introduce additional elements into the DOM, we are able to
        make use of a JSX fragment <>...</> as the error message above alludes to */
        class App extends Component {
            render() {
                return (                    // Enclosing tags <>...</> around JSX elements

                    <>
                        <h1>Hello World</h1>
                        <p>This is a paragraph</p>
                    </>

                )
            }
        }

/* JSX versions of certain HTML attributes -------------------------------------------------- */

    // Consider the following snippet:
        <h1 class="my-class">This is HTML</h1>
    // If we try to use this in JSX, we might come up with something like...
        // WRONG way
        class App extends Component {                       // class
            render() {
                return (

                    <h1 class="my-class">This is JSX</h1>   // class

                    );
            }
        }
        // Because we have "class" on both Line 1 and 4, we will get an ERROR in our console:
            Warning: Invalid DOM property 'class'. Did you mean 'className'?
                in h1 (at App.js:5)
                in App (at src/indexedDB.js:6)
    // When using the HTML class, we will need to instead use the "className" attribute in JSX:
        // CORRECT way
        class App extends Components {
            render() {
                return (

                    <h1 className="my-class">This is JSX</h1>   // use "className" instead of "class"

                    );
            }
        }
    
    // Consider the following where we might have a "form" in HTML:
        <form action="/process" method="post">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" id="email" name="username" class="form-control" />
            </div>
        </form>
    // Rewritten in JSX:
        class App extends Component {
            render() {
                return (

                    <form action="/process" method="post">
                        <div class="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="username" class="form-control"/>
                        </div>
                    </form>

                );
            }
        }

// Additional resources:
https://reactjs.org/docs/dom-elements.html