/* App.js - Functions and INPUTS */

import './App.css';
import React from 'react';
import PersonCardComponent from './components/PersonCardComponent';

function App() {              // Functional component
  return (                    // Input data into component
    <div className="App">
      <PersonCardComponent firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCardComponent firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      {/* curly braces are optional for normal Strings */}
      <PersonCardComponent firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <PersonCardComponent firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;