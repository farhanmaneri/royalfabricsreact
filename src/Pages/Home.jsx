import React from 'react'
import Carosuels from '../components/common/Carosuels'
import Cards from '../components/common/Cards'
import Navibar from '../components/common/Navibar'
import Location from '../components/common/Location'
import Address from '../components/common/Address'
import TitleData from '../components/common/TitleData'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Home = () => {


    return (
        <>
            <Navibar />
            <Carosuels />
            
            <div>
                {TitleData.map((item, index) => {
                    return (

                                            
                                    <Cards
                                        photo={item.imgsrc}
                                        title={item.title}
                                    />
                                                
                    )

                })}


            </div>

            <container>
                <Row>
                    <Col sm={6} xs={12} md={6} lg={6}>
                        <div  className="address"><Address /></div>
                    </Col>
                    <Col sm={6} xs={12} md ={6} lg={6}> <Location />
                    </Col>
                </Row>


            </container>
        </>
    )
}
export default Home;