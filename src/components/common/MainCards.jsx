import React from 'react'
import { NavLink } from 'react-router-dom';
import Cards from './Cards';
import TitleData from './TitleData';
import {Button} from 'react-bootstrap'

function MainCards() {
    return (
        <div>
           
             <div className='cardContainer'>
                {TitleData.map((item, index) => {
                    return (

                        <Cards
                            photo={item.imgsrc}
                            title={item.title}
                        />
                    )
                })}
            </div>
            
        </div>
    )
}

export default MainCards;
