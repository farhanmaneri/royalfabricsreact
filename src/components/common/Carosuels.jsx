import React from 'react'
import { Carousel } from 'react-bootstrap';

const Carosuels = ()=>{
return(
<>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../assets/images/1slide.jpg')  }
      alt="First slide"
      style={{height:400}}
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../assets/images/2slide.jpg')  }
      alt="Third slide"
      style={{height:400}}
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../assets/images/3slide.jpg')  }
      alt="Third slide"
      style={{height:400}}
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

</>

)

}

export default Carosuels;