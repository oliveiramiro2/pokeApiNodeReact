import React from 'react';
import './App.css';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import Pagination from './components/Pagination'
import Globais from './components/Globais'
import axios from 'axios';

export default class App extends React.Component {

  state = {
    pokemons : []
  } 

  componentDidMount() {
    this.loadpokemon()
  }

  searchPokemon = () => {
    Globais.filtroAtivo ? 
        this.loadpokemon(Globais.urlTodosPokes) 
      : 
        this.loadpokemon(Globais.urlBase) 
  }
  
  loadpokemon = async (url = Globais.urlAtual) => {
    try{
      const response = await axios.get(url)
      const pokemons = response.data.results
      const filtraPoke = pokemons.filter(poke=>poke.name.startsWith(Globais.urlPesquisa))
      this.setState({ 
        pokemons : filtraPoke
      })
    }catch{
      const response = await axios.get(Globais.urlBase)
      const pokemons = response.data.results
      const filtraPoke = pokemons.filter(poke=>poke.name.startsWith(Globais.urlPesquisa))
      Globais.filtroPoke = filtraPoke
      this.setState({ 
        pokemons : filtraPoke
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
        {Globais.filtroAtivo ? 
            <p />
          :
            <Pagination refreshPag={this.loadpokemon} />
        }
        
      </div>
    )
  }
  
}