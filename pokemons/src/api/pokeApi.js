import axios from 'axios'
import Globais from '../components/Globais'

export const doRequestPoke = (url = Globais.urlBase) => {
    return axios.get(url).then(response => response.data.results)
}

