import React from "react";
import {
  BrowserRouter,
  // Link
  Switch,
  Route,
} from "react-router-dom";
import People from './components/People';
import Planets from './components/Planets';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="container border border-dark mx-5 my-5 px-3 py-3">
      <BrowserRouter>
      <Form />
        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planets />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
