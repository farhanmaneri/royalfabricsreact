import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Cards = (props) => {

  return (
    <>
        <Card style={{ width: '15rem' }} >
      <div style={{border:'1px solid gray',borderRadius:'2px'}}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <Card.Img variant="top" style={{ width: '10rem', marginTop: '10px' }} src={props.photo} />
          </div>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
            {/* <Button variant="primary">Go somewhere</Button> */}
            <button variant='secondary'>
              <NavLink exact activeClassName='active_class' to='/alkaram'>See More</NavLink></button>
          </Card.Body>
      </div>
        </Card>
    </>
  )

}

export default Cards;