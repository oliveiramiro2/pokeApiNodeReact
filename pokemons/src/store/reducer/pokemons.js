const initialState = {
    pokemons: []
}

const pokemonsReducer = (state=initialState, action) => {
    switch(action.type){
        case "TROCA_POKES":
            return { ...state, pokemons: action.payload }
        default:
            return state
    }
}

export default pokemonsReducer