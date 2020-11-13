import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Cards = (props) => {

  return (
    <>
        <Card style={{ width: '18rem' }} >
      <div style={{border:'1px solid gray',borderRadius:'2px'}}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              <NavLink exact activeClassName='active_class' to='/products'>
            <Card.Img variant="top" style={{ width: '10rem', marginTop: '10px' }} src={props.photo} />
                </NavLink>
          </div>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          
            
                
          </Card.Body>
      </div>
        </Card>
    </>
  )

}

export default Cards;