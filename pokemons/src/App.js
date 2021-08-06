import React from 'react';
import { Switch, Route } from 'react-router-dom'

import PokedexHome from './components/PokedexHome'
import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import Pagination from './components/Pagination'
import SobreNos from './components/SobreNos'
import InfoPoke from './components/InfoPoke'

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
            <Route path="/informacoes_poke" component={InfoPoke}></Route>
            <Route path="/Sobre_Nos" component={SobreNos} />
            <Route path="/" component={PokedexHome} />
          </Switch>
        </main>  
      </div>           
    )
  }  
}