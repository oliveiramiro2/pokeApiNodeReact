const InitialState = {
    poke: 0
}

const informacoesReducer = (state = InitialState.poke, action) => {
    switch(action.type){
        case "NUM_INFORMACOES":
            return { poke: action.payload }
        default:
            return state
        }
}

export default informacoesReducer