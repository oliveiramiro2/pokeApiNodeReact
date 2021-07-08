import React, { Component } from 'react';
import './App.css';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      pokemons : [],
      proximaPag : [],
      anteriorPag : []
    }

    
  } 
  
  componentDidMount() {
      this.loadpokemon()
    }
  
  //apiLinkTodos = 'https://pokeapi.co/api/v2/pokemon'
  apiLinkTodos = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118'
  loadpokemon = async (url = this.apiLinkTodos) => {
    
    const response = await axios.get(url)
    const pokemons = response.data.results
    const proximaPag = response.data.next
    const anteriorPag = response.data.previous
    this.setState({ 
      pokemons,
      proximaPag,
      anteriorPag,
      })
  }
    
  render(){
    return (
      <div className='Grid'>
        <HeaderPoke />
        <CardsPoke 
          pokemons={this.state.pokemons} 
          next={this.state.proximaPag} 
          provious={this.state.anteriorPag}
        />
      </div>
    )
  }
  
}

export default App;
