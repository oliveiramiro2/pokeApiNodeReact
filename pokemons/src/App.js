import React from 'react';
import { Switch, Route } from 'react-router-dom'

import PokedexHome from './components/PokedexHome'
import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import Pagination from './components/Pagination'

export default class App extends React.Component {  
  render(){
    return (  
      <div>
        <main>
          <Switch>                    
            <Route path="/pokemons">
              <div className='Grid'>           
                <HeaderPoke />
                <CardsPoke />
                <Pagination />       
              </div>
            </Route>  
            <Route path="/">
              <PokedexHome />
            </Route> 
          </Switch>
        </main>  
      </div>           
    )
  }  
}