// Here we input data for our Component(s)

import './App.css';
import PersonCardComponent from './components/PersonCardComponent';

function App() {
  return (
    <div className="App">
      {/* Numbers require curly braces, but for normal Strings it is optional*/}
      <PersonCardComponent firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCardComponent firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      {/* Normal strings do not need curly braces */}
      <PersonCardComponent firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <PersonCardComponent firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;