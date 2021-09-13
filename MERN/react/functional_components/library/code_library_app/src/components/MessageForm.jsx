import React, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );  // calls a prop to lift state up to parent in App.js (const [currentMsg, setCurrentMsg] = useState(""))
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h4 className="my-3" style={{ color:'purple'}}>Set Message</h4>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
                style={{ color:'purple' }}
            ></textarea>
            <input type="submit" value="Send Message" />
            </form>
    );
};

const MessageDisplay = (props) => {
    return (
        <>
            <h4 className="my-3" style={{ color:'green' }}>Current Message</h4>
            <pre style={{ color:'green' }}>{ props.message }</pre>
        </>
    );
};
    
export default MessageForm;
export { MessageDisplay}
