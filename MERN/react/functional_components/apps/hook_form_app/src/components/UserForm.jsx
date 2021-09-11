import React, { useState } from 'react' // import hook "useState"

const UserForm = (props) => {
    // Here, we define two (2) variables at a time by calling the "useState" method.
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpw, setConfirmpw] = useState("")
    const [isSubmitted, setSubmit] = useState(false)

    const createUser = (e) => {
        // prevents default form behavior of submitting into to the route in the "action" which causes a page to load
        e.preventDefault(); 
        const newUser = { firstname, lastname, email, password, confirmpw }
        console.log('Welcome, ' + newUser.firstname, newUser.lastname, newUser.password, newUser.email);
        setSubmit(true)
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setConfirmpw('')
    }

    const configureFirstname = (e) => {
        setFirstname(e.target.value)
    }
    const configureLastname = (e) => {
        setLastname(e.target.value)
    }
    const configureEmail = (e) => {
        setEmail(e.target.value)
    }
    const configurePassword = (e) => {
        setPassword(e.target.value)
    }
    const configureConfirmpw = (e) => {
        console.log(password);
        setConfirmpw(e.target.value)
        console.log(e.target.value);
    }


    return (
        <div className="container w-25 p-3">
            <form className="row" onSubmit={ createUser }>
                {
                    // Condition ? (Value if True) : (Value if False)
                    isSubmitted?
                    <h3 className="h3">Submit Success!</h3> :
                    <h3 className="h3">Please Submit Form</h3>
                }
                <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input className="form-control" type="text" onChange={ configureFirstname } value={ firstname } />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input className="form-control" type="text" onChange={ configureLastname } value={ lastname } />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="text" onChange={ configureEmail } value={ email } />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" onChange={ configurePassword } value={ password } />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password:</label>
                    <input className="form-control" type="password" onChange={ configureConfirmpw } value={ confirmpw } />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
            <div className="row">
                <h3 className="h5 my-3">First Name: { firstname }</h3>
                <h3 className="h5 mb-3">Last Name: { lastname }</h3>
                <h3 className="h5 mb-3">Email: { email }</h3>
                <h3 className="h5 mb-3">Password: { password }</h3>
                <h3 className="h5">Confirm Password: { confirmpw }</h3>
            </div>
        </div>
    )
}

export default UserForm