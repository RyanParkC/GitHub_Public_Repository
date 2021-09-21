// Import css file
import './App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import React
import React from 'react';
import { 
  BrowserRouter, // router implementation for HTML5 browsers
  Route, // matches location renders inclusively
  Switch // exclusively renders the first child <route> or <redirect> that matches the location
} from 'react-router-dom'
// Import objects from 'views' folder
import Main from './views/Main'
import Detail from './views/Detail'
import UpdateProduct from './views/UpdateProduct';


// Here, we list the order to display files on the webpage
function App() {
  return (
    <BrowserRouter>
      <div className="App container w-25 mt-4">
        <Switch>
          {/* Main.js ---------------------- */}
          <Route exact path="/">
            <Main />
          </Route>

          {/* Detail.js -------------------- */}
          <Route path="/products/view/:id">
            <Detail />
          </Route>

          {/* UpdateProduct.js ------------- */}
          <Route path="/products/update/:id">
            <UpdateProduct />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;