import Button from './components/Button';
import PokémonList from './components/List';
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokémon, setPokémon] = useState([])

  const fetchPokémon = (e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
      .then(res => setPokémon( res.data.results ))
    console.log( pokémon );
  }
  return (
    <div className="container align-items-center">
      <Button onClick={ fetchPokémon }/>
      <PokémonList monsters={ pokémon }/>
    </div>
  );
}

export default App;
