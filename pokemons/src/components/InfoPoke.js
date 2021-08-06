import React from 'react'
import { connect } from 'react-redux'
import changeDados from './../store/action/informacaoA'

function InfoPoke({ poke, info, changeDados }){
    React.useEffect(()=>{
        changeDados(poke.poke)
    }, [changeDados, poke])
    if(info){
        console.log(info.info.sprites)
        return(
            <div className='pokedex-container'>  
                <p>Informações 1</p>
                <div className='pokedex-fundo'>                                      
                    <img width='200' height='250' src={info.info.sprites.front_default}></img>
                    <img width='200' height='250' src={info.info.sprites.back_default}></img>
                    <img width='200' height='250' src={info.info.sprites.front_shiny}></img>
                    <img width='200' height='250' src={info.info.sprites.back_shiny}></img>
                    <img width='200' height='250' src={info.info.sprites.other.dream_world.front_default}></img>
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