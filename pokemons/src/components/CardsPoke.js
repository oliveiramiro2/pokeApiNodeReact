import React from 'react'
import { Row, Col, Card, CardTitle } from 'react-materialize'

import Globais from './Globais'
import pokeball from './img/pokeball.jpg'


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
                                {Globais.filtroAtivo ?
                                        <Card       
                                            actions={[
                                                <p>Informações</p>
                                            ]}
                                            header={<CardTitle image={pokeball}/>}
                                            horizontal
                                            >
                                            {poke.name}
                                        </Card> 
                                    :
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
                                } 
                            </div>
                    )} 
                </Col>
            </Row>
        </div>
        
    )
}