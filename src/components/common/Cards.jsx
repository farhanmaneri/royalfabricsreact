import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const Cards = (props) => {

  return (
    <>
      <div className='cards'>
        <div className='card'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(props.photo)} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
              <button className='btn btn-primary'><NavLink exact activeClassName='active_class navBtn' to='/alkaram'>Al-Karam</NavLink></button>
            </Card.Body>
          </Card>
        </div>
      </div>


    </>
  )

}

export default Cards;