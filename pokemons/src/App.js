import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import './App.css';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import Pagination from './components/Pagination'
import Globais from './components/Globais'
import axios from 'axios';

///* global vai controlar a ordem das fotos modificando o link apenas por um numero */
global.atual = null

export default class App extends Component {

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
      console.log(`try ${pokemons}`)
      const proximaPag = {
        proximaPag: response.data.next,
      }
      const anteriorPag = {
        anteriorPag: response.data.previous
      }
      this.setState({ 
        pokemons,
        proximaPag,
        anteriorPag,
      })
    }catch{
      const response = await axios.get(this.apiLinkTodos)
      const pokemons = response.data.results
      console.log('catch'+response.data)
      const proximaPag = {
        proximaPag: response.data.next,
      }
      const anteriorPag = {
        anteriorPag: response.data.previous
      }
      this.setState({ 
        pokemons,
        proximaPag,
        anteriorPag,
      })
    }   
  }

  nextPag = () => {
    const { proximaPag } = this.state
    if(proximaPag.next === null) return
    const nextPag = proximaPag.proximaPag
    Globais.numPagBase = Globais.numPagBase+1
    this.loadpokemon(nextPag)
  }

  prevPag = () => {
    const { anteriorPag } = this.state
    if(anteriorPag.previous === null) return
    const prevPag = anteriorPag.anteriorPag
    Globais.numPagBase = Globais.numPagBase-1
    this.loadpokemon(prevPag)
  }
  
  render(){
    return (
      <div className='Grid'>
        <HeaderPoke />
        <CardsPoke 
          pokemons={this.state.pokemons} 
        />
        <Pagination nextPag={this.prevPag} prevPag={this.prevPag} infoPagAtual={this.state.pokemons}/>
         <div className='paginator'>
          <button className='pag-anterior' onClick={this.prevPag}> <Icon>chevron_left</Icon> </button>
          <button className='pag-proxima' onClick={this.nextPag}> <Icon>chevron_right</Icon> </button>
        </div>
      </div>
    )
  }
  
}