import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpw, setConfirmpw] = useState("")
    const [isSubmitted, setSubmit] = useState(false)

    const[firstnameError, setFirstnameError] = useState("")
    const[lastnameError, setLastnameError] = useState("")
    const[emailError, setEmailError] = useState("")
    const[passwordError, setPwError] = useState("")
    const[confirmpwError, setConfirmpwError] = useState("")

    const validateFirstname = (e) => {
        setFirstname(e.target.value)

        if (e.target.value.length < 2) {
            setFirstnameError('username must be at least 2 characters')
        } else {
            setFirstnameError('')
        }
    }
    const validateLastname = (e) => {
        setLastname(e.target.value)

        if (e.target.value.length < 2) {
            setLastnameError('username must be at least 2 characters')
        } else {
            setLastnameError('')
        }
    }
    const validateEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5) {
            setEmailError('email must at least 3 characters')
        } else {
            setEmailError('')
        }
            
    }
    const validatePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPwError('Passwords must be at least 8 characters long.')
        } 
        else {
            setPwError('')
        }
        
    }
    const validateConfirmpw = (e) => {
        console.log(password);
        setConfirmpw(e.target.value)
        console.log(e.target.value);
        if (e.target.value !== password) {
            setConfirmpwError('Passwords must match!')
        } else {
            setConfirmpwError('')
        }
    }
    const createUser = (e) => {
        e.preventDefault()
        if(firstname.length < 1) {
            setFirstnameError('First Name is required')
        }
        if(lastname.length < 1) {
            setLastnameError('Last Name is required')
        }
        const newUser = { firstname, lastname, email, password, confirmpw }
        console.log('Welcome, ' + newUser.firstname, newUser.lastname, newUser.password, newUser.email);
        setSubmit(true)
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setConfirmpw('')
    }

    return (
        <div className="row">
            <form className="row" onSubmit={ createUser }>
                {
                    isSubmitted?
                    <h3 className="h3">Thank You For Submitting The Form</h3> :
                    <h3 className="h3">Please Submit The Form</h3>
                }
                <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input className="form-control" type="text" onChange={ validateFirstname } value={ firstname } />
                    {
                        firstnameError?
                        <p className="text-danger">{ firstnameError }</p> : ''
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input className="form-control" type="text" onChange={ validateLastname } value={ lastname } />
                    {
                        lastnameError?
                        <p className="text-danger">{ lastnameError }</p> : ''
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="text" onChange={ validateEmail } value={ email } />
                    {
                        emailError?
                        <p className="text-danger">{ emailError }</p> : ''
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" onChange={ validatePassword } value={ password } />
                </div>
                    {
                        passwordError?
                        <p className="text-danger">{ passwordError }</p> : ''
                    }
                    {
                        confirmpwError?
                        <p className="text-danger">{ confirmpwError }</p> : ''
                    }
                <div className="mb-3">
                    <label className="form-label">Confirm Password:</label>
                    <input className="form-control" type="password" onChange={ validateConfirmpw } value={ confirmpw } />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />

            </form>
            <div className="row">
                <h3 className="h3">First Name: { firstname }</h3>
                <h3 className="h3">Last Name: { lastname }</h3>
                <h3 className="h3">Email: { email }</h3>
                <h3 className="h3">Password: { password }</h3>
                <h3 className="h3">Confirm Password: { confirmpw }</h3>
            </div>
        </div>
    )
}

export default UserForm