import React from 'react'
import { Link } from 'react-router-dom'
import { IoExitSharp } from 'react-icons/io5'

function SobreNos(){

    return(
        <div className='container-home'>          
            <div className='container-sobre-img'>
                <div className='sobre-voltar'>                    
                    <Link to='/'><IoExitSharp/></Link>
                    <p className='texto-padrao'>Voltar</p>
                </div>               
                <p className='texto-padrao texto-sobre'>
                    Espero que gostem do pokedex. Este projeto é apenas para treinar os conceitos de React.                    
                </p>
                <p className='texto-padrao nome-sobre'>
                    Ramiro <p className='icone-nome'>☺☻</p>
                </p>
            </div>
        </div>
    )
}

export default SobreNos