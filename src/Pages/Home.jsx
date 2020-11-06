
import React from 'react'
import Carosuels from '../components/common/Carosuels'
import Cards from '../components/common/Cards'
import Navibar from '../components/common/Navibar'
import Location from '../components/common/Location'
import Address from '../components/common/Address'
import TitleData from '../components/common/TitleData'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import Categories from '../components/common/Categories'
import AddSection from '../components/common/AddSection'
import MainCards from '../components/common/MainCards'
import Footer from '../components/common/Footer'


const Home = () => {


    return (
        <>
            <Navibar />
            <Carosuels />
            <AddSection />
            <MainCards />
            <Footer />

        </>
    )
}
export default Home;