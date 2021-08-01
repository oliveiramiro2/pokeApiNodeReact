import { doRequestPoke } from './../../api/pokeApi'
import Globais from './../../components/Globais'

export const changePokes = (url = Globais.urlBase) => {
    const payload = doRequestPoke(url)

    return{
        type: "TROCA_POKES",
        payload
    }
}