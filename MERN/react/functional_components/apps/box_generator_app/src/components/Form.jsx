import React, { useState } from 'react'

// constant "Form" with argument "props"
const Form = ( props ) => {
    // Setting State = useState with 'target' keys (background, height, width)
    const [inputState, setInputState] = useState({
        background: '', // key : value
        height: '',
        width: '',
    })
    // creating new constant { object } called "onSubmit" and setting it = to the argument (props)
    const { onSubmit } = props
    // constant inputInfo = argument "e"
    const inputInfo = (e) => {
        // new variable "styles" = objects (including previous ones) of inputState 
        let styles = { ...inputState }
        // new variables "color, height, width" = any
        let color, height, width;
        // (if) Conditions
        // target = target event property returns the element that triggered the event
            // target.id === string 'color'
        if ( e.target.id === 'color' ) {
            // setting variable "color" = e.target.value
            color = e.target.value
            // setting styles.background = color = e.target.value
            styles.background = color
        }
        // styles.height = height = e.target.value 
        if ( e.target.id === 'height' ) {
            height = e.target.value
            styles.height = height 
        }
        if ( e.target.id === 'width' ) {
            width = e.target.value
            styles.width = width 
        }
        
        setInputState( styles )
    }
    const submitHandler = (e) => {
        e.preventDefault()
        let styles = { ...inputState }
        styles.width += 'px'
        styles.height += 'px'
        onSubmit( styles )
        setInputState({
            background: '',
            height: '',
            width: '',
        })
    }
    return (
        <form action="" className="form" onSubmit={ submitHandler }>
            {/* Color input box -------------------------------------------------------------------------------- */}
            {/* htmlFor, name can = anything. id matches with above */}
            <div className="form-group">
                <label htmlFor="color">Color: </label>
                <input type="text" name="color" id="color" onChange={ inputInfo } value={ inputState.background } 
                placeholder="color"/>
            </div>
            {/* Height input box ------------------------------------------------------------------------------- */}
            <div className="form-group">
                <label htmlFor="height">Height: </label>
                <input type="number" name="height" id="height" onChange={ inputInfo } value={ inputState.height } 
                placeholder="0" />
            </div>
            {/* Width input box -------------------------------------------------------------------------------- */}
            <div className="form-group">
                <label htmlFor="width">Width: </label>
                <input type="number" name="width" id="width" onChange={ inputInfo } value={ inputState.width } 
                placeholder="0" />
            </div>
            {/* Button to submit ------------------------------------------------------------------------------- */}
            <div className="form-group">
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form