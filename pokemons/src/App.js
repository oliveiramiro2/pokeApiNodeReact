import React, { Component } from 'react';
import './App.css';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      pokemons : []
    }

    
  } 
  componentDidMount() {
      this.loadpokemon()

    }
  
  apiLinkTodos = 'https://pokeapi.co/api/v2/pokemon'
  loadpokemon = async (url = this.apiLinkTodos) => {
    
    const response = await axios.get(url)
    const pokemons = response.data.results
    this.setState({ 
      pokemons
      })
  }
    
  render(){
    return (
      <div className='Grid'>
        <HeaderPoke />
        <CardsPoke pokemons={this.state.pokemons}/>
      </div>
    )
  }
  
}

export default App;
