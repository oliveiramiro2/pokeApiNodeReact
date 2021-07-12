import React, { Component } from 'react';
import './App.css';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import Pagination from './components/Pagination'
import Globais from './components/Globais'
import axios from 'axios';

export default class App extends Component {

  state = {
    pokemons : [],
    proximaPag : {},
    anteriorPag : {},
    buscaPoke : {},
  } 

  componentDidMount() {
    this.loadpokemon()
  }

  
  loadpokemon = async (url = Globais.urlAtual, busca = 0) => {
    if(busca){
      
    }else{

    }
    try{
      const response = await axios.get(url)
      const pokemons = response.data.results
      const proximaPag = {proximaPag: response.data.next}
      const anteriorPag = {anteriorPag: response.data.previous}
      this.setState({ 
        pokemons,
        proximaPag,
        anteriorPag,
      })
    }catch{
      const response = await axios.get(this.apiLinkTodos)
      const pokemons = response.data.results
      const proximaPag = {proximaPag: response.data.next}
      const anteriorPag = {anteriorPag: response.data.previous}
      this.setState({ 
        pokemons,
        proximaPag,
        anteriorPag,
      })
    }   
  }
  
  render(){
    return (
      <div className='Grid'>
        <HeaderPoke stateBusca={this.setState}/>
        <CardsPoke 
          pokemons={this.state.pokemons} 
        />
        <Pagination refreshPag={this.loadpokemon} />
      </div>
    )
  }
  
}