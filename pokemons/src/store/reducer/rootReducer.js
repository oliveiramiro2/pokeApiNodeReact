import { combineReducers } from 'redux'

import pokemonsReducer from './pokemons'
import paginacaoReducer from './paginacaoR'
import pesquisaReducer from './pesquisaR'

export const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    text: pesquisaReducer,
    pag: paginacaoReducer,  
})