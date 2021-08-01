export const changeSearch = (text) => {
    const payload = text
    console.log('pesquisaA', payload)
    if(text !== ''){
        console.log('entrou')
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