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
  } 

  componentDidMount() {
    this.loadpokemon()
  }

  searchPokemon = () => {
    this.loadpokemon(Globais.urlTodosPokes, true)
  }
  
  loadpokemon = async (url = Globais.urlAtual, search=false) => {
    try{
      const response = await axios.get(url)
      const pokemons = response.data.results
      const filtraPoke = pokemons.filter(poke=>poke.name.startsWith(Globais.urlPesquisa))
      const proximaPag = {proximaPag: response.data.next}
      const anteriorPag = {anteriorPag: response.data.previous}
      this.setState({ 
        pokemons : filtraPoke,
        proximaPag,
        anteriorPag,
      })
    }catch{
      const response = await axios.get(Globais.urlBase)
      const pokemons = response.data.results
      const filtraPoke = pokemons.filter(poke=>poke.name.startsWith(Globais.urlPesquisa))
      Globais.filtroPoke = filtraPoke
      const proximaPag = {proximaPag: response.data.next}
      const anteriorPag = {anteriorPag: response.data.previous}
      this.setState({ 
        pokemons : filtraPoke,
        proximaPag,
        anteriorPag,
      })
    }   
  }
  
  render(){
    return (
      <div className='Grid'>
        <HeaderPoke pesquisa={this.searchPokemon}/>
        <CardsPoke 
          pokemons={this.state.pokemons} 
        />
        <Pagination refreshPag={this.loadpokemon} />
      </div>
    )
  }
  
}