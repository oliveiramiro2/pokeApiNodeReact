import { combineReducers } from 'redux'

import pokemonsReducer from './pokemons'
import paginacaoReducer from './paginacaoR'
import pesquisaReducer from './pesquisaR'
import informacoesReducer from './informacoesR'
import dadosReducer from './informacaoR'

export const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    text: pesquisaReducer,
    pag: paginacaoReducer, 
    poke: informacoesReducer,
    info: dadosReducer, 
})