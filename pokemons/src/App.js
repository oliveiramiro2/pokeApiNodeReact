import React, {  useEffect } from 'react';
import './App.css';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'

function App() {

    useEffect(  () => {
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then(r => r.json() )
        .then(json => {
          //console.log(`result = ${r}`)
          console.log(`json = ${json.results.values}`)
        })
    }, [])
    

  return (
    <div className='Grid'>
      <HeaderPoke />
      <CardsPoke />
    </div>
  );
}

export default App;
