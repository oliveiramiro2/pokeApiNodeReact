import axios from 'axios'
import Globais from './../../components/Globais'

export default async function changePokes(url = Globais.urlBase, search = ''){

    const response = await axios.get(url)
    const pokemons = response.data.results
    const payload = pokemons.filter(poke=>poke.name.startsWith(search))

    return{
        type: "TROCA_POKES",
        payload
    }
}