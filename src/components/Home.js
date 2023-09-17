import React from 'react'
import Productcart from '../Products/Productcart'
import Footer from './Footer'
import All from '../Products/All'
import Navy from './Navy'




function Home() {
  return (
  

    <div className='home-container'>
   
      
    
      
        <img className='img ms-4' decoding="async" width="1500" height="685" src='https://img.freepik.com/premium-photo/little-cute-curious-adorable-smiling-girl-with-bow-hair-crawling-sitting-studio-posing-white-background_88135-9728.jpg?w=1380'></img>
       

        <Productcart/>
        <All/>
       
        
      
    </div>
  )
}

export default Home

