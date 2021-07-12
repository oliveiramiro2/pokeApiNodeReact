import React from 'react'
import { Row, Col, Card, CardTitle } from 'react-materialize'

import Globais from './Globais'

export default function CardsPoke(props){
    return(
        <div className='cards-poke'>
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    {props.pokemons.map(
                        (poke, id) =>
                            <div key={id}>
                                <Card       
                                    actions={[
                                        <p>Informações</p>
                                    ]}
                                    header={<CardTitle image={
                                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ (Globais.numPagBase*20) + id + 1 }.png`}
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
}