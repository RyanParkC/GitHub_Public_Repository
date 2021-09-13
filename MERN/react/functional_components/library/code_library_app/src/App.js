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
      <h2 className="mt-5">User Form</h2>
      <UserForm/>
    {/* useReducer.js -------------------------------------------------------- */}
      <useReducerForm/>
    {/* MapComponent.js ------------------------------------------------------ */}
      <h2 className="mt-5">Map Component</h2>
      <Groceries/>
      <Mapnumbers/>
    {/* MessageForm.jsx ------------------------------------------------------ */}
      <h2 className="mt-5">MessageForm</h2>
      <MessageForm onNewMessage={ youveGotMail } />
      <h2 className="mt-5">MessageDisplay</h2>
      <MessageDisplay message={ currentMsg } />
    {/* ButtonAlert.js ------------------------------------------------------- */}
      {/* <h4 className="mt-5">
        ButtonAlert
      </h4>
      <ButtonAlert/> */}
    {/* OtherInputTypes.js --------------------------------------------------- */}
      <h2 className="mt-5">Fruit</h2>
      <FruitForm/>
    {/* MyContext.jsx -------------------------------------------------------- */}
      <h2 className="mt-5">My Context</h2>
      {/* <MyContext/> */}
      <GreatGreatGreatGrandchildComponent/>
    </div>
  );
}

export default App;
