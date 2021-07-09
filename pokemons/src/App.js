import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import './App.css';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import axios from 'axios';

/* global vai controlar a ordem das fotos modificando o link apenas por um numero */
global.atual = null

class App extends Component {

  state = {
    pokemons : [],
    proximaPag : {},
    anteriorPag : {},
  } 

  componentDidMount() {
      this.loadpokemon()
    }
  
  apiLinkTodos = 'https://pokeapi.co/api/v2/pokemon'
  loadpokemon = async (url = null) => {
    try{
      const response = await axios.get(url)
      const pokemons = response.data.results
      const proximaPag = {
        proximaPag: response.data.next,
      }
      const anteriorPag = {
        anteriorPag: response.data.previous
      }
      console.log(`try prox ${proximaPag.proximaPag} retorno ${response.data.next} ant ${anteriorPag.anteriorPag}`)
      this.setState({ 
        pokemons,
        proximaPag,
        anteriorPag,
      })
    }catch{
      const response = await axios.get(this.apiLinkTodos)
      const pokemons = response.data.results
      const proximaPag = {
        proximaPag: response.data.next,
      }
      const anteriorPag = {
        anteriorPag: response.data.previous
      }
      console.log(`try prox ${proximaPag.next} retorno ${response.data.next} ant ${anteriorPag.anteriorPag}`)
      this.setState({ 
        pokemons,
        proximaPag,
        anteriorPag,
      })
      console.log(`try prox ${this.state.proximaPag.proximaPag}`)
    }   
  }

  nextPag = () => {
    const { proximaPag } = this.state
    if(proximaPag.next === null) return
    const nextPag = proximaPag.proximaPag
    global.atual = global.atual+20
    this.loadpokemon(nextPag)
  }

  prevPag = () => {
    const { anteriorPag } = this.state
    if(anteriorPag.previous === null) return
    const prevPag = anteriorPag.anteriorPag
    global.atual = global.atual-20
    this.loadpokemon(prevPag)
  }
  
  render(){
    return (
      <div className='Grid'>
        <HeaderPoke />
        <CardsPoke 
          pokemons={this.state.pokemons} 
          pag={global.atual}
        />
         <div className='paginator'>
          <button className='pag-anterior' onClick={this.prevPag}> <Icon>chevron_left</Icon> </button>
          <button className='pag-proxima' onClick={this.nextPag}> <Icon>chevron_right</Icon> </button>
        </div>
      </div>
    )
  }
  
}

export default App;
