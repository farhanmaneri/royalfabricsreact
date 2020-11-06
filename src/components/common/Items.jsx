import React from 'react'
import ProductsData from './ProductsData'

import ProductsCard from './ProductsCard'
import { Container } from 'react-bootstrap'

const Items = () => {
    return (
<>
{ ProductsData.map((val)=>{
    return(
        <>
        <Container className='cardContainer' >
<Container className='heading' fluid><h3>{val.product} </h3></Container> 
    { ProductsData.map((val) => {
                return (
                    <div>
                       
                        <ProductsCard
                            photo={val.imgsrc}
                            title={val.title}
                            price={val.rate}
                        />
                   </div> 
                )
            })
        }

</Container>
</>
    )})}
    </>
    )
  
}

export  { 
    
    Items
};