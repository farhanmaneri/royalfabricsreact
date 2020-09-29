import React from 'react'
import { Card } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const ProductsCard = (props) => {

  return (
    <>
          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.photo} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text> {props.price}    </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <button className='btn btn-primary'><NavLink exact activeClassName='active_class navBtn' to='/alkaram'>Al-Karam</NavLink></button>
            </Card.Body>
          </Card>
          
      </>
  )

}

export default ProductsCard;