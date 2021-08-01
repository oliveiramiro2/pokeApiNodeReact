const InitialState = {
    pag: 0
}

const paginacaoReducer = (state = InitialState.pag, action) => {
    switch(action.type){
        case "TROCA_PAG":
            return { pag: action.payload }
        default:
            return state
    }
}

export default paginacaoReducer