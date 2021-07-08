import React from 'react'
import { Row, Col, Card, CardTitle, Icon, Pagination } from 'react-materialize'

const CardsPoke = (props) => {
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
                                key={id}
                                actions={[
                                    <a key="1" href="">Informações</a>
                                ]}
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`} />}
                                horizontal
                                revealIcon={<Icon>more_vert</Icon>}
                                >
                                {poke.name}
                            </Card> 
                    )} 
                </Col>
            </Row>
            <Pagination
                activePage={1}
                items={5}
                leftBtn={<a key="1" href={props.previous}> <Icon>chevron_left</Icon> </a>}
                rightBtn={<a key="2" href={props.next}> <Icon>chevron_right</Icon> </a>}
            />
        </div>
        
    )
}

export default CardsPoke