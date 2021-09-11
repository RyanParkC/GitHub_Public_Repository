import './App.css';
import UserForm from './components/UserForm'  // import jsx Component 'UserForm'
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap after npm install bootstrap

function App() {
  return (
    <div className="App">
      <UserForm/>
    </div>
  );
}

export default App;