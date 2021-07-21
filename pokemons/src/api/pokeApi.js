import axios from 'axios'
import Globais from './../components/Globais'

export const doRequestPoke = (url) => {
    return axios.get(`${Globais.urlBase}/${url}`)
                .then(res => res.data)
}