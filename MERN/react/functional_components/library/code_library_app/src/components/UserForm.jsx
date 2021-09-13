import React, { useState } from 'react';
    
    
const UserForm = (props) => {

// useState hook --------------------------------------------------------------------------------------------------
    // allows you to add state to your Functional components
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");

    const [confirmpw, setConfirmpw] = useState("");
    const [confirmpwError, setConfirmpwError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

// Create New User -----------------------------------------------------------------------------------------------
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpw };
        console.log("Welcome", newUser);
        // sets Submit status to "true"
        setHasBeenSubmitted( true );
        // can set these states back to an appropriate starting value
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpw("");
    };

// Validation functions ------------------------------------------------------------------------------------------
    const validateFirstname = (e) => {
        setFirstname( e.target.value );
        if ( e.target.value.length < 1 ) {
            setFirstnameError("First Name is required!");
        } else if ( e.target.value.length < 2 ) {
            setFirstnameError("First Name must be 2 characters or longer!")
        } else
            setFirstnameError(false)
    }
    const validateLastname = (e) => {
        setLastname( e.target.value );
        if ( e.target.value.length < 1 ) {
            setLastnameError("Last Name is required!");
        } else if ( e.target.value.length < 2 ) {
            setLastnameError("Last Name must be 2 characters or longer!")
        } else
            setLastnameError(false)
    }
    const validateEmail = (e) => {
        let EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test( e.target.value )
        console.log(EMAIL_REGEX);   // check Console in "Inspect" webpage
        setEmail( e.target.value );
        if ( e.target.value.length < 1 ) {
            setEmailError("Email is required!");
        } else if ( e.target.value.length < 3 ) {
            setEmailError("Email must be 3 characters or longer!")
        } else if ( !EMAIL_REGEX ) {
            setEmailError("Invalid email format")
        } else {
            setEmailError(false)
        }
        // {
        //     return(true)
        // } else
        //     setEmailError("Invalid email address format")
        //     return(false)

        // if not EMAIL_REGEX.match(reg_info['email']):
        // flash('Invalid email format!', 'email')
        // is_valid = False
    }
    const validatePassword = (e) => {
        setPassword( e.target.value );
        if ( e.target.value.length < 1 ) {
            setPasswordError("Password is required!");
        } else if ( e.target.value.length < 8 ) {
            setPasswordError("Password must be 8 characters or longer!")
        } else
            setPasswordError(false)
    }
    const validateConfirmpw = (e) => {
        setConfirmpw( e.target.value );
        if ( e.target.value !== password ) {
            setConfirmpwError("Passwords must match!");
        } else {
            setConfirmpwError('')   // same error as above
        }
    }
// Displayed on Webpage ------------------------------------------------------------------------------------------------
    return(
        <div>
            {/* Form to Submit */}
            <form onSubmit={ createUser }>  {/* calls function "createUser" upon pressing Submit button */}
                {/* Form Submission Messages */}
                {
                    hasBeenSubmitted ? 
                    <h4 style={{ color:'green' }}>Thank you for submitting the form!</h4> :
                    <h4 style={{ color:'red' }}>Welcome, please submit the form.</h4> 
                }
                {/* First Name box ---------------------------- */}
                <div className="mt-5">
                    {/* Displayed on webpage */}
                    <label className="mx-3">First Name: </label> 
                    {/* Changes/Validates value in real time (onChange) upon receiving user input (value) */}
                    <input type="text" onChange={ validateFirstname } />
                    {/* for just onChange real-time:
                        <input type="text" onChange={ (e) => setFirstname(e.target.value) } value={ firstname } /> */}
                    {
                        firstnameError?
                        <p style={{ color:'red' }}>{ firstnameError }</p> :
                        ''
                    }
                </div>
                {/* Last Name box ---------------------------- */}
                <div className="mt-3">
                    <label className="mx-3">Last Name: </label> 
                    <input type="text" onChange={ validateLastname } value={ lastname } />
                    {
                        lastnameError?
                        <p style={{ color:'red' }}>{ lastnameError }</p> :
                        ''
                    }
                </div>
                {/* Email box -------------------------------- */}
                <div className="mt-3">
                    <label className="mx-3">Email Address: </label> 
                    <input type="text" onChange={ validateEmail } value={ email }/>
                    {
                        emailError?
                        <p style={{ color:'red' }}>{ emailError }</p> :
                        ''
                    }
                </div>
                {/* Password box ----------------------------- */}
                <div className="mt-3">
                    <label className="mx-3">Password: </label>
                    <input type="text" onChange={ validatePassword } value={ password }/>
                </div>
                    {
                        passwordError?
                        <p style={{ color:'red' }}>{ passwordError }</p> :
                        ''
                    }
                {/* Confirm Password box --------------------- */}
                <div className="mt-3">
                    <label className="mx-3">Confirm Password: </label>
                    <input type="text" onChange={ validateConfirmpw } value={ confirmpw }/>
                </div>
                    {
                        confirmpwError?
                        <p style={{ color:'red' }}>{ confirmpwError }</p> :
                        ''
                    }
                {/* Submit Button ---------------------------- */}
                <input className="my-3" type="submit" value="Create User" />
            </form>

            {/* Real-Time Input fields ----------------------- */}
            <div className="row my-3">
                <h3 className="h5">First Name: { firstname }</h3>
                <h3 className="h5">Last Name: { lastname }</h3>
                <h3 className="h5">Email: { email }</h3>
                <h3 className="h5">Password: { password }</h3>
                <h3 className="h5">Confirm Password: { confirmpw }</h3>
            </div>

        </div>

    );
};
    
export default UserForm;
