import React from 'react'
import { connect } from 'react-redux'
import changeDados from './../store/action/informacaoA'
import { Link } from 'react-router-dom'
import { IoExitSharp } from 'react-icons/io5'

function InfoPoke({ poke, info, changeDados }){
    React.useEffect(()=>{
        if(poke.poke){
            changeDados(poke.poke)
            localStorage.setItem("numPoke", poke.poke)
        }else{
            changeDados(localStorage.getItem("numPoke"))
        }
    }, [changeDados, poke])
    if(info){
        return(
            <div className='pokedex-container'>  
                <div className='informacao-container'>
                    <div className='voltar-home'>                    
                        <Link to='/pokemons'><IoExitSharp className='voltar-icon'/></Link>
                        <p className='texto-padrao'><b>Voltar</b></p>
                    </div>
                    <div className='informacao-poke'>
                        {info.info.moves.map((info, id)=>
                            <p className="texto-padrao" key={id}>Move: {info.move.name}</p>
                        )}
                    </div>
                </div>
                <div className='pokedex-fundo'>                   
                    <div className='container-fotos'>
                        <div>
                            <p className='texto-padrao'>Sprites Padrão</p>
                            <img width='100' height='150' alt='frente' src={info.info.sprites.front_default}></img>
                            <img width='100' height='150' alt='costas' src={info.info.sprites.back_default}></img>
                        </div>
                        <div>
                            <p className='texto-padrao'>Sprites Shiny</p>
                            <img width='100' height='150' alt='shiny-frente' src={info.info.sprites.front_shiny}></img>
                            <img width='100' height='150' alt='shiny-costas' src={info.info.sprites.back_shiny}></img>
                        </div>
                        <div>
                            <p className='texto-padrao'>Sprites Dream</p>
                            <img width='100' height='150' alt='dream-frente' src={info.info.sprites.other.dream_world.front_default}></img>
                        </div>
                    </div>                                      
                </div>  
                <div className='informacao-container'>
                    <p>Informações: <b>{info.info.name}</b></p>
                    <div className='informacao-poke'>
                        {info.info.types.map((info, id)=>
                            <p key={id} className="texto-padrao">type: {info.type.name}</p>
                        )}
                        {info.info.abilities.map((info, id)=>
                            <p key={id} className="texto-padrao">ability: {info.ability.name}</p>
                        )}
                        <p className="texto-padrao">Experience: {info.info.base_experience}</p>
                        {info.info.stats.map((info, id)=>
                            <div key={id}>
                                <p className="texto-padrao">{info.stat.name}</p>
                                <p className="texto-padrao">: {info.base_stat}</p>
                            </div>
                        )}
                    </div>
                </div>                      
            </div>
        )
    }else{
        return (
            <div className='pokedex-container'>  
                <p>Informações 1</p>
                <div className='pokedex-fundo'>
                    <div className='container-fotos'>
                        <b>Carregando informacões</b>
                    </div>
                </div>        
                <p>Informações 2</p>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        info: state.info,
        poke: state.poke,
    }
}

export default connect(mapStateToProps, { changeDados })(InfoPoke)