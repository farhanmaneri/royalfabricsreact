import React from 'react'
import ShopIcon from '@material-ui/icons/Shop';
import '../../index.css'
function Categories() {
    return (
        <div className='container-fluid '>
            <h6>Browse your Categories her</h6>
            <div className='icons' style={{width:'100%',height:'250px'}}>
                <ShopIcon  style={{fontSize:'150px'}}    />
                <ShopIcon  style={{fontSize:'150px'}}    />
                <ShopIcon  style={{fontSize:'150px'}}    />
                </div>
        </div>
    )
}

export default Categories
