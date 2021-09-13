import React, { useReducer } from 'react';

const useReducerForm = (props) => {
// useReducer hook -----------------------------------------------------------------------------------------------
    // used for more complex state logic involving multiple sub-values or when next state depends on previous one
    // allows you to optimize performance for components that trigger deep updates because you can pass dispatch down
    // instead of callbacks
    const initialState = {  // object "initialState"
        firstName: {
            value: 'wow!',      // key:value pair --- key:"empty string"
            error: 'firstname error!'
        },
        lastName: {
            value: '',          // key:value pair --- key:"empty string"
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };

    function reducer( state, action ) {     // reducer's job is to...
        return {                            // return a new state object (not mutate the original)
            ...state,                       // using the current state
            [action.type]: action.payload   // and the given action object
        };
    }

    const [state, dispatch] = useReducer( reducer, initialState );

    function handleChange(e) {
        const { value, error } = e.target;
        dispatch({
            type: value,
            payload: error
        });
    }
    return (
        /* useReducer box -------------------------------- */
        <div>
            <div className="my-5">
                <h4>useReducer</h4>
                <div>
                    { JSON.stringify(state) }
                </div>
                <div>
                    {state.firstName.error !== null && (
                        <p className="error">{state.firstName.error}</p>
                    )}
                    {state.lastName.error !== null && (
                        <p className="error">{state.lastName.error}</p>
                    )}
                    {state.email.error !== null && (
                        <p className="error">{state.email.error}</p>
                    )}
                </div>
                <div>
                    <label className="my-3">
                        <span className="mx-3">First Name: </span>{' '}
                        <input
                            name="name"
                            value={ state.firstName.value }
                            onChange={ handleChange }
                        />
                    </label>
                </div>
                <div>
                    <label className="mb-3">
                        <span className="mx-3">Last Name: </span>{' '}
                        <input
                            name="name"
                            value={ state.lastName.value }
                            onChange={ handleChange }
                        />
                    </label>
                </div>
                <div>
                    <label className="mb-3">
                        <span className="mx-3">Email:</span>{' '}
                        <input
                            name="email"
                            value={ state.email.value }
                            onChange={ handleChange }
                        />
                    </label>
                </div>
                
            </div>
        </div>
    );
};

export default useReducerForm;