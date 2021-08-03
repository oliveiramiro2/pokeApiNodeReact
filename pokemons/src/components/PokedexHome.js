import React from 'react'
import { Link } from 'react-router-dom'

function PokedexHome(){

    return(
        <div className='container-home'>
            <div className='container-home-img'>
                <h2>Pokedex</h2>
                <hr />
                <div className='rodape-home-poke'>
                    <Link className='texto-padrao' to='/pokemons'>Todos os pokémons</Link>
                </div>
                <div className='rodape-home-sobre'>
                    <Link className='texto-padrao' to='/sobre_nos'>Sobre Nós</Link>
                </div>
            </div>
        </div>
    )
}

export default PokedexHome