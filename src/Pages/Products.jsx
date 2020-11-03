import React from 'react'

import Navibar from '../components/common/Navibar'
import { Items} from '../components/common/Items'

const Products = () => {
    return (
        <>
            <Navibar />
            <div className='product_view'>
                <div style={{margin:'5px'}}>
                    <Items />
                </div>
</div>
        </>
    )
}

export default Products;