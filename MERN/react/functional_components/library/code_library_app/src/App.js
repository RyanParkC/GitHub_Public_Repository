import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import PersonCard from './components/PersonCardComponent';
import Counter from './components/CounterComponent';
import UserForm from './components/UserForm';
import useReducerForm from './components/useReducer';
import Groceries, { Mapnumbers } from './components/MapComponent';
import MessageForm from './components/MessageForm';
import { MessageDisplay } from './components/MessageForm';
import FruitForm from './components/OtherInputTypes';
import { GreatGreatGreatGrandchildComponent } from './context/MyContext';
// import MyContext from './context/MyContext';

function App() {
  /* MessageForm.jsx -- Lifting State section -------------------------------- */
    // useState("message prop") -- displays message prop which auto updates when changed
  const [currentMsg, setCurrentMsg] = useState("There are no messages") 
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }

  return (
    <fieldset className="container border border-dark mt-5">
      <legend className="px-3 py-3">App.js</legend>
        <div className="App">
      {/* App.js --------------------------------------------------------------- */}
        <h1>Hello World!</h1>
      {/* PersonCardComponent.js ----------------------------------------------- */}
        {/* We can pass down a string with or without curly braces */}
        <PersonCard firstName="John" lastName="Doe" age={ 48 } hairColor="Brown" />
        <PersonCard firstName={"Jane"} lastName={"Doe"} age={ 35 } hairColor={"Black"} />
      {/* CounterComponent.js -- Counter button -------------------------------- */}
        <Counter/>
      {/* UserForm.jsx --------------------------------------------------------- */}
        <div className="border border-danger mx-5 my-5">
          <h2 className="mt-4">User Form w/ Validations</h2>
          <UserForm/>
        </div>
      {/* useReducer.js -------------------------------------------------------- */}
        <useReducerForm/>
      {/* MapComponent.js ------------------------------------------------------ */}
        <div className="border border-info py-3 mx-5">
          <h2>Map Component</h2>
          <Groceries/>
          <Mapnumbers/>
        </div>
      {/* MessageForm.jsx ------------------------------------------------------ */}
        <div className="border border-secondary my-3 mx-5 py-3">
          <h2>MessageForm</h2>
          <MessageForm onNewMessage={ youveGotMail } />
          <h2 className="mt-3">MessageDisplay</h2>
          <MessageDisplay message={ currentMsg } />
        </div>
      {/* ButtonAlert.js ------------------------------------------------------- */}
        {/* <h4 className="mt-5">
          ButtonAlert
        </h4>
        <ButtonAlert/> */}
      {/* OtherInputTypes.js --------------------------------------------------- */}
        <div className="border border-warning my-3 mx-5 py-3">
          <h2 className="mt-3">Fruit</h2>
          <FruitForm/>
        </div>

      {/* MyContext.jsx -------------------------------------------------------- */}
        <div className="border border-secondary my-3 mx-5 py-3">
          <h2 className="mt-3">My Context</h2>
          {/* <MyContext/> */}
          <GreatGreatGreatGrandchildComponent/>
        </div>
      </div>
    </fieldset>
  );
}

export default App;
