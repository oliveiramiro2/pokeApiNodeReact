import React from 'react';
import { store } from './store/store'
import { Provider } from 'react-redux';

import HeaderPoke from './components/HeaderPoke'
import CardsPoke from './components/CardsPoke'
import Pagination from './components/Pagination'
import Globais from './components/Globais'
import axios from 'axios';

export default class App extends React.Component {  
  render(){
    return (    
      <div className='Grid'>
        <Provider store={store}>
          <HeaderPoke />
          <CardsPoke />
          {Globais.filtroAtivo ? 
            <p />
          :
            <Pagination />
          }
        </Provider>         
      </div>     
    )
  }  
}