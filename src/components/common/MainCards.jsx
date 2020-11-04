import React from 'react'
import Cards from './Cards';
import TitleData from './TitleData';

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
