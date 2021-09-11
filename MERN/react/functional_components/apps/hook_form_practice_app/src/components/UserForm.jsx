import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpw, setConfirmpw] = useState("");
    
    const createUser = (e) => {
        // preventing default form behavior from occurring
        // default behavior = submitting info to the route in the 'action' which causes a page load
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpw };
        console.log("Welcome", newUser);
        // setting these variables back to an appropriate starting value
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmpw("")
    };

    return(
        <div className="row">
            {/* Form Submit -------------------------------------------------------------------------------- */}
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } value={ firstname } />
                    </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } value={ lastname }/>
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirmpw(e.target.value) } value={ confirmpw }/>
                </div>
                {/* Submit Button */}
                <input type="submit" value="Create User" />
            </form>

            {/* Display real-time input --------------------------------------------------------------------- */}
            <div>
                <h3>First Name: { firstname }</h3>
                <h3>Last Name: { lastname }</h3>
                <h3>Email: { email }</h3>
                <h3>Password: { password }</h3>
                <h3>Confirm Password: { confirmpw }</h3>
            </div>
        </div>
    );
};
    
export default UserForm;
