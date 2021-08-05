import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'
import { IoExitSharp } from 'react-icons/io5'

import changePokes from './../store/action/consultaApi'
import { CgPokemon } from 'react-icons/cg'
import { SiPokemon } from 'react-icons/si'

function CardsPoke({ pokemons }){
    if(pokemons.pokemons){
        return(
            <div className='cards-poke'>
                <div className='voltar-home'>                    
                    <Link to='/'><IoExitSharp className='voltar-icon'/></Link>
                    <p className='texto-padrao'><b>Voltar Home</b></p>
                </div>   
                <Row>
                    <Col
                        m={6}
                        s={12}
                    >   
                    {pokemons.pokemons.map((poke, id) =>
                        <div key={id}>
                            <Card 
                                key={id}    
                                actions={[
                                    <div key={id}>
                                        <p>
                                            <CgPokemon/> ----- Informações
                                        </p>
                                    </div>
                                ]}
                                
                                header={<CardTitle image={
                                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.slice(34, -1)}.png`}
                                /> }
                                
                                horizontal
                                >      
                                <i className='icones-poke'><SiPokemon/></i>
                                <br/>                       
                                {poke.name}    
                            </Card> 
                        </div>
                    )}    
                    </Col>
                </Row>
            </div> 
        )
    }else{
        return (
            <div className='container-animacao'>
                <h5>Carregando...</h5>
                <i><CgPokemon/></i><br/>
                <i><SiPokemon/></i>
            </div>    
        )
    }
    
}

const mapStateToProps = state => {
    return { 
        pokemons: state.pokemons,
    }
}

export default connect(mapStateToProps, { changePokes })(CardsPoke)