import React from 'react'
import Carosuels from '../components/common/Carosuels'
import Cards from '../components/common/Cards'
import Navibar from '../components/common/Navibar'
import Location from '../components/common/Location'
import Address from '../components/common/Address'
import TileData from '../components/common/TitleData'


const Home = ()=>{

   
    return(
        <>
         <Navibar/>
  <Carosuels/>
  <div className='container-fluid '>
  {TileData.map((item,index)=>{
      return(
        <div className='container-fluid'>
        
        <Cards
         photo={item.imgsrc}
         title={item.title}
        
        />
        
      </div>
      )
    
  })}
  

  </div>
  <div className='container-fluid address'>
  <div className='container' style={{width:'50%', color:"white",height:150, backgroundColor: "black"}}><Address /></div>
  <div className='container' style={{width:'50%', color:"white",height:150}}><Location /></div>
  </div>
        </>
    )
}
export default Home;