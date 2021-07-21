import { doRequestPoke } from './../../api/pokeApi'

export const changePokes = url => {
    const payload = doRequestPoke(url)

    return{
        type: "TROCA_POKES",
        payload
    }
}