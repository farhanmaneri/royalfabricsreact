import React from 'react'
import Carosuels from '../components/common/Carosuels'
import Cards from '../components/common/Cards'
import Navibar from '../components/common/Navibar'
import Location from '../components/common/Location'
import Address from '../components/common/Address'
import TitleData from '../components/common/TitleData'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import Categories from '../components/common/Categories'
const Home = () => {


    return (
        <>
            <Navibar />
            <Carosuels />
            {/* <Categories/> */}
            <div className='cardContainer'>
                {TitleData.map((item, index) => {
                    return (

                        <Cards
                            photo={item.imgsrc}
                            title={item.title}
                        />
                    )
                })}
            </div>

            <Container fluid>
                <Row>
                    <Col sm={6} xs={12} md={6} lg={6} xl={6}>
                        <div className="address"><Address /></div>
                    </Col>
                    <Col sm={6} xs={12} md={6} lg={6} xl={6}>
                        <div className='location'><Location /></div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Home;