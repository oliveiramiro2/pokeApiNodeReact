import axios from 'axios'
import Globais from './../../components/Globais'

export default async function changeDados(poke){
    const response = await axios.get(`${Globais.urlBase}/${poke}`)
    const payload = response.data
    return{
        type: "MOSTRA_INFO",
        payload
    }
}