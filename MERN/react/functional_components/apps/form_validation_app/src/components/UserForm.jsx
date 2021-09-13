import React, { useReducer } from 'react';
 
const initialState = {
    'firstName': {
        'value': '',
        'error': []
    },
    'lastName': {
        'value': '',
        'error': []
    },
    'email': {
        'value': '',
        'error': []
    }
};
 
function reducer(state, action) {
    return {
        ...state,
        [action.type]: {
            value: action.payload,
            error: action.error || []
        }
    };
}

const UserForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let nameErrors = []

        if (state.firstName.value.length === 0) {
            nameErrors.push('name required')
        }
        console.log(nameErrors);
        dispatch({
            type: e.target[0].name,
            payload: e.target[0].value,
            error: nameErrors
        })
    }

    return (
        <div className="container w-25 p-3">
            <form className="row" onSubmit={handleSubmit}>
                <div className="mb-3">
                    {
                        state.firstName.error.map(message => <p style={{'color': 'red'}} key={message}>{message}</p>)
                    }
                    <label className="form-label" htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" onChange={ handleChange } name="firstName" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                    <input className="form-control" type="text" onChange={ handleChange } name="lastName" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="text" onChange={ handleChange } name="email" />
                </div>
                {/* Submit Button */}
                <input className="btn btn-primary my-3" type="submit" value="Submit" />

            </form>
            <div className="row">
                <h3 className="h5 my-3">First Name: {state.firstName.value}</h3>
                <h3 className="h5 mb-3">Last Name: </h3>
                <h3 className="h5 mb-3">Email: </h3>
            </div>
        </div>
    )
}

export default UserForm
