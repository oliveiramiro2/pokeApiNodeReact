import React from 'react'
import { connect } from 'react-redux'
import changeDados from './../store/action/informacaoA'

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
                <p>Informações 1</p>
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
                            <p className='texto-padrao'>Sprites Dream World</p>
                            <img width='100' height='150' alt='dream-frente' src={info.info.sprites.other.dream_world.front_default}></img>
                        </div>
                    </div>                                      
                </div>        
                <p>Informações 2</p>
            </div>
        )
    }else{
        return (
            <div className='pokedex-container'>  
                <p>Informações 1</p>
                <div className='pokedex-fundo'>
                    Carregando informacões
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