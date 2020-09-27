import React from 'react'
import TitleData from '../components/common/TitleData'
import Cards from '../components/common/Cards'
import Navibar from '../components/common/Navibar'
const Alkaram = () => {
    return (
<>
<Navibar />
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
export default Alkaram;