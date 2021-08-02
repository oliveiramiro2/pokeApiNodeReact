export const changeSearch = (text) => {
    const payload = text
    if(text !== ''){
        return{           
            type: "PESQUISA",
            payload
        }
    }        
    return{
        type: "DESATIVA_PESQUISA",
        payload          
    }
}