/* Note:
    Context provides a way to pass data through the component tree without
    having to pass props down manually at every level.

    It is designed to share data that can be considered "global" for a
    tree of React components (e.g. current user, theme, preferred language, prop)

    Context is primarily used when some data needs to be accessible 
    by MANY components at different nesting levels.
        Apply it sparingly because it makes component re-use more difficult. */

import { createContext, useContext } from 'react';

const MyContext = createContext();

const GreatGreatGreatGrandchildComponent = (props) => {
    const context = useContext(MyContext);
    return(
        <div className="my-3" style={{ color:'purple'}}>
            Hello, we can add context here: { context }
        </div>
    )
}

export default MyContext;
export { GreatGreatGreatGrandchildComponent }