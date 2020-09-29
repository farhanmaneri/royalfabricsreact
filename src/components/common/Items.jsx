import React from 'react'
import ProductsData from './ProductsData'

import ProductsCard from './ProductsCard'
import { Container } from 'react-bootstrap'

const Alkaram = () => {
    return (
<>
<Container className='cardContainer' >
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
    )
}
const GulAhmed = () => {
    return (
<>
<Container className='cardContainer' >
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
    )
}
export { 
    GulAhmed,
    Alkaram
};