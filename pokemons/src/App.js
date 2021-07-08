import React, { Component } from 'react';
import './App.css';
import axios from '../../../blogNodeReact/client/node_modules/axios';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      resultado : []
    }

    axios
      .get('/pokemons')
      .then(resultado => {
        console.log(resultado)
        this.setState({
          resultado : resultado.data
        })
      })
  }  
    
  render(){
    {console.log(this.state.resultado)}
    return (
      <div className='Grid'>
        <HeaderPoke />
        <CardsPoke pokemons={this.state.resultado}/>
      </div>
    )
  }
  
}

export default App;
