import React from 'react'
import Carosuels from '../components/common/Carosuels'
import Cards from '../components/common/Cards'
import Navibar from '../components/common/Navibar'
import Location from '../components/common/Location'
import Address from '../components/common/Address'
import TileData from '../components/common/TitleData'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Home = () => {


    return (
        <>
            <Navibar />
            <Carosuels />
            <div className='container-fluid '>
                {TileData.map((item, index) => {
                    return (

                        <container>
                            <Row>
                                <Col xs={12} md={8}>
                                    <Cards
                                        photo={item.imgsrc}
                                        title={item.title}
                                    />
                                </Col>
                            </Row>
                        </container>

                    )

                })}


            </div>

            <container>
                <Row>
                    <Col sm={8} xs={6} md={4} lg={6}>
                        <div  className="address"><Address /></div>
                    </Col>
                    <Col sm={8} xs={6} md ={4} lg={6}> <Location />
                    </Col>
                </Row>


            </container>
        </>
    )
}
export default Home;