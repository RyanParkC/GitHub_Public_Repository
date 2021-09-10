import React, { useState } from 'react';
import './App.css';

function App() {
  
  // const newTodoStateArr = useState("");
  // const newTodo = newTodoStateArr[0];
  // const setNewTodo = newTodoStateArr[1];

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    // to make sure you can't add a blank text to the list
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    };
    /* setTodos and pass in a brand new array containing all current todos plus 1 more */
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

// For Delete Button
  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
        // To avoid mutating the todo directly, do this (best practice):
        // const updatedTodo = { ...todo, complete: !todo.complete };
        // return updatedTodo;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form 
        onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}
      >
        <input 
          onChange={(event) => {
            setNewTodo(event.target.value);
          }} 
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {todos.map((todo, i) => {             // displays added input on webpage
        const todoClasses = ["bold", "italic"];

        if (todo.complete) {
          todoClasses.push("line-through");
        }
        return (
          <div key={i}>
            <input 
              onChange={(event) => {
                handleToggleComplete(i);
              }} 
              checked={todo.complete} 
              type="checkbox" 
            />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button 
              onClick={(event) => {
                handleTodoDelete(i);
              }}
              style={{ marginLeft: "10px" }}
            >
              Delete
              </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;