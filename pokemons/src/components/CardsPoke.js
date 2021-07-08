import React from 'react'
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'

const CardsPoke = (props) => {
    console.log(`test ${props.pokemons}`)
    return(
        <div className='cards-poke'>
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    {props.pokemons.map(
                        (poke, id) => 
                            
                           <Card
                                key="1"
                                actions={[
                                    <a key="1" href="">a</a>
                                ]}
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                                horizontal
                                revealIcon={<Icon>more_vert</Icon>}
                                >
                                Here is the standard card with a horizontal image.
                            </Card> 
                    )}
                    <Card
                                key="1"
                                actions={[
                                    <a key="1" href="">a</a>
                                ]}
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                                horizontal
                                revealIcon={<Icon>more_vert</Icon>}
                                >
                                Here is the standard card with a horizontal image.
                            </Card>     
                </Col>
            </Row>
        </div>
        
    )
}

export default CardsPoke