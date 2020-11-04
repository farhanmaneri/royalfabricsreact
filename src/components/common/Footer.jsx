import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Address from './Address';
import Location from './Location'
function Footer() {
    return (

        <Container  className=' footer'>
            <Row>
                <Col sm={6} xs={12} md={6} lg={6} xl={6}>
                    <Address />
                </Col>
                <Col sm={6} xs={12} md={6} lg={6} xl={6}>
                    <Location />
                </Col>
            </Row>
        </Container>



    )
}

export default Footer;
