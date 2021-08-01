import { doRequestPoke } from './../../api/pokeApi'

const initialState = {
    pokemons : doRequestPoke()
}

const pokemonsReducer = (state=initialState.pokemons, action) => {
    switch(action.type){
        case "TROCA_POKES":
            return { state, pokemons: action.payload }
        default:
            return state
    }
}

export default pokemonsReducer