import React from 'react';
import { Switch, Route } from 'react-router-dom'

import CardsCompleto from './components/CardsCompleto'

export default class App extends React.Component {  
  render(){
    return (  
      <Switch>
        <Route path='/pokemons' component={CardsCompleto}/>
      </Switch>           
    )
  }  
}