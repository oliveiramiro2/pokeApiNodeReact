const initialState = {
    info : false
}

const dadosReducer = (state=initialState.info, action) => {
    switch(action.type){
        case "MOSTRA_INFO":
            return { info: action.payload }
        default:
            return state
    }
}

export default dadosReducer