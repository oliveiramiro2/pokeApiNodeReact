import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardTitle } from 'react-materialize'

import changePokes from './../store/action/consultaApi'

function CardsPoke({ pokemons }){
    if(pokemons.pokemons){
        return(
            <div className='cards-poke'>
                <Row>
                    <Col
                        m={6}
                        s={12}
                    >   
                    {pokemons.pokemons.map((poke, id) =>
                        <div key={id}>
                            <Card     
                                actions={[
                                    <p>Informações</p>
                                ]}
                                header={<CardTitle image={
                                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.slice(34, -1)}.png`}
                                />}
                                horizontal
                                >
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
            <h5>Carregando...</h5>
        )
    }
    
}

const mapStateToProps = state => {
    return { 
        pokemons: state.pokemons,
    }
}

export default connect(mapStateToProps, { changePokes })(CardsPoke)