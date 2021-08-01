import { combineReducers } from 'redux'

import pokemonsReducer from './pokemons'
import paginacaoReducer from './paginacaoR'

export const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    pag: paginacaoReducer
})