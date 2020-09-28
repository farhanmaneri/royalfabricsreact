import React from 'react'
import TitleData from './TitleData'
import Cards from './Cards'

const Alkaram = () => {
    return (
<>

    { TitleData.map((val) => {
                return (
                    <div>
                        <Cards
                            photo={val.imgsrc}
                            title={val.title}
                        />
                   </div> 
                )
            })
        }
</>
    )
}

const GulAhmed = () => {
    return (
<>

    { TitleData.map((val) => {
                return (
                    <div>
                        <Cards
                            photo={val.imgsrc}
                            title={val.title}
                        />
                   </div> 
                )
            })
        }
</>
    )
}
export { 
    GulAhmed,
    Alkaram
};