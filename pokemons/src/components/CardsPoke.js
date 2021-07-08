import React from 'react'
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'

const CardsPoke = (props) => {
    return(
        <div className='cards-poke'>
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                    Here is the standard card with a horizontal image.
                    </Card>
                    <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                    Here is the standard card with a horizontal image.
                    </Card>
                    <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                    Here is the standard card with a horizontal image.
                    </Card>
                    <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                    Here is the standard card with a horizontal image.
                    </Card>
                    <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                    Here is the standard card with a horizontal image.
                    </Card>
                    <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>
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