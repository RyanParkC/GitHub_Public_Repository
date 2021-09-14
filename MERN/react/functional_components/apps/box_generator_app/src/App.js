import React, { useState } from 'react'
import Form from './components/Form';
import BoxDisplay from './components/BoxDisplay';

// Displays Layout to Webpage for all files connected
function App() {
  const [inputStateLog, setInputStateLog] = useState([])
  const addToLog = ( data ) => {
    setInputStateLog([ ...inputStateLog, data ])
  }
  return (
    <div className="container">
      {/* Form.jsx ----------------------------- */}
      <Form onSubmit={ addToLog }/>
      {/* BoxDisplay.jsx ----------------------- */}
      <BoxDisplay boxStyles={ inputStateLog }/>
    </div>
  );
}
export default App;