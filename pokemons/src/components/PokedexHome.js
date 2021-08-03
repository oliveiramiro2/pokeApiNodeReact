import React from 'react'
import { Link } from 'react-router-dom'

function PokedexHome(){

    return(
        <div className='container-home'>
            <div className='container-home-img'>
                <h3>Pokedex</h3>
                <hr /><hr /><hr />
                <div className='rodape-home-links'>
                    <Link className='texto-padrao' to='/pokemons'>Todos os pokémons</Link>
                </div>
            </div>
        </div>
    )
}

export default PokedexHome