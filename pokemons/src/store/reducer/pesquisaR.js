const initialState = {
    text: '',
}

const pesquisaReducer = (state = initialState.text, action) => {
    switch(action.type){
        case "DESATIVA_PESQUISA":
            return { text: action.payload }
        case "PESQUISA":
            return { text: action.payload }
        default:
            return state
    }
}

export default pesquisaReducer